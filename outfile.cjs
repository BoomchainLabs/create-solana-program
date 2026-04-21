#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r, g, b);
      const max = Math.max(r, g, b);
      const delta = max - min;
      let h;
      let s;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s;
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r, g, b);
      const diff = v - Math.min(r, g, b);
      const diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = 0;
        s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r, 1 - g, 1 - b);
      const c = (1 - r - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r = rgb[0] / 255;
      let g = rgb[1] / 255;
      let b = rgb[2] / 255;
      r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
      g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
      b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
      const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s);
      const q = 255 * v * (1 - s * f);
      const t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s) * v;
      const lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      const n = wh + f * (v - wh);
      let r;
      let g;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r;
      let g;
      let b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * g ** (1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * b ** (1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r = args[0];
      const g = args[1];
      const b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r, g), b);
      const min = Math.min(Math.min(r, g), b);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i = 0; i < len; i++) {
          const adjacent = adjacents[i];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path6 = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path6.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path6;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i = 0; i < len; i++) {
        const toModel = models[i];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var wrapAnsi162 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${code + offset}m`;
    };
    var wrapAnsi2562 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\x1B[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m2 = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\x1B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    var ansi2ansi = (n) => n;
    var rgb2rgb = (r, g, b) => [r, g, b];
    var setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    var colorConvert;
    var makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert === void 0) {
        colorConvert = require_color_convert();
      }
      const offset = isBackground ? 10 : 0;
      const styles3 = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert)) {
        const name = sourceSpace === "ansi16" ? "ansi" : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles3[name] = wrap(identity, offset);
        } else if (typeof suite === "object") {
          styles3[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles3;
    };
    function assembleStyles2() {
      const codes = /* @__PURE__ */ new Map();
      const styles3 = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles3.color.gray = styles3.color.blackBright;
      styles3.bgColor.bgGray = styles3.bgColor.bgBlackBright;
      styles3.color.grey = styles3.color.blackBright;
      styles3.bgColor.bgGrey = styles3.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles3)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles3[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles3[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles3, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles3, "codes", {
        value: codes,
        enumerable: false
      });
      styles3.color.close = "\x1B[39m";
      styles3.bgColor.close = "\x1B[49m";
      setLazyProperty(styles3.color, "ansi", () => makeDynamicStyles(wrapAnsi162, "ansi16", ansi2ansi, false));
      setLazyProperty(styles3.color, "ansi256", () => makeDynamicStyles(wrapAnsi2562, "ansi256", ansi2ansi, false));
      setLazyProperty(styles3.color, "ansi16m", () => makeDynamicStyles(wrapAnsi16m2, "rgb", rgb2rgb, false));
      setLazyProperty(styles3.bgColor, "ansi", () => makeDynamicStyles(wrapAnsi162, "ansi16", ansi2ansi, true));
      setLazyProperty(styles3.bgColor, "ansi256", () => makeDynamicStyles(wrapAnsi2562, "ansi256", ansi2ansi, true));
      setLazyProperty(styles3.bgColor, "ansi16m", () => makeDynamicStyles(wrapAnsi16m2, "rgb", rgb2rgb, true));
      return styles3;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles2
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os2 = require("os");
    var tty2 = require("tty");
    var hasFlag2 = require_has_flag();
    var { env: env2 } = process;
    var forceColor;
    if (hasFlag2("no-color") || hasFlag2("no-colors") || hasFlag2("color=false") || hasFlag2("color=never")) {
      forceColor = 0;
    } else if (hasFlag2("color") || hasFlag2("colors") || hasFlag2("color=true") || hasFlag2("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env2) {
      if (env2.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env2.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env2.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env2.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel2(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor2(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag2("color=16m") || hasFlag2("color=full") || hasFlag2("color=truecolor")) {
        return 3;
      }
      if (hasFlag2("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env2.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os2.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env2) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env2.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env2) {
        const version = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor2(stream, stream && stream.isTTY);
      return translateLevel2(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel2(supportsColor2(true, tty2.isatty(1))),
      stderr: translateLevel2(supportsColor2(true, tty2.isatty(2)))
    };
  }
});

// node_modules/gradient-string/node_modules/chalk/source/util.js
var require_util = __commonJS({
  "node_modules/gradient-string/node_modules/chalk/source/util.js"(exports, module2) {
    "use strict";
    var stringReplaceAll2 = (string, substring, replacer) => {
      let index = string.indexOf(substring);
      if (index === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
        endIndex = index + substringLength;
        index = string.indexOf(substring, endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    var stringEncaseCRLFWithFirstIndex2 = (string, prefix, postfix, index) => {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index + 1;
        index = string.indexOf("\n", endIndex);
      } while (index !== -1);
      returnValue += string.substr(endIndex);
      return returnValue;
    };
    module2.exports = {
      stringReplaceAll: stringReplaceAll2,
      stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex2
    };
  }
});

// node_modules/gradient-string/node_modules/chalk/source/templates.js
var require_templates = __commonJS({
  "node_modules/gradient-string/node_modules/chalk/source/templates.js"(exports, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      const u = c[0] === "u";
      const bracket = c[1] === "{";
      if (u && !bracket && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      if (u && bracket) {
        return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, arguments_) {
      const results = [];
      const chunks = arguments_.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        const number = Number(chunk);
        if (!Number.isNaN(number)) {
          results.push(number);
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk2, styles3) {
      const enabled = {};
      for (const layer of styles3) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk2;
      for (const [styleName, styles4] of Object.entries(enabled)) {
        if (!Array.isArray(styles4)) {
          continue;
        }
        if (!(styleName in current)) {
          throw new Error(`Unknown Chalk style: ${styleName}`);
        }
        current = styles4.length > 0 ? current[styleName](...styles4) : current[styleName];
      }
      return current;
    }
    module2.exports = (chalk2, temporary) => {
      const styles3 = [];
      const chunks = [];
      let chunk = [];
      temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
        if (escapeCharacter) {
          chunk.push(unescape(escapeCharacter));
        } else if (style) {
          const string = chunk.join("");
          chunk = [];
          chunks.push(styles3.length === 0 ? string : buildStyle(chalk2, styles3)(string));
          styles3.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles3.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk2, styles3)(chunk.join("")));
          chunk = [];
          styles3.pop();
        } else {
          chunk.push(character);
        }
      });
      chunks.push(chunk.join(""));
      if (styles3.length > 0) {
        const errMessage = `Chalk template literal is missing ${styles3.length} closing bracket${styles3.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMessage);
      }
      return chunks.join("");
    };
  }
});

// node_modules/gradient-string/node_modules/chalk/source/index.js
var require_source = __commonJS({
  "node_modules/gradient-string/node_modules/chalk/source/index.js"(exports, module2) {
    "use strict";
    var ansiStyles2 = require_ansi_styles();
    var { stdout: stdoutColor2, stderr: stderrColor2 } = require_supports_color();
    var {
      stringReplaceAll: stringReplaceAll2,
      stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex2
    } = require_util();
    var { isArray } = Array;
    var levelMapping2 = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles3 = /* @__PURE__ */ Object.create(null);
    var applyOptions2 = (object, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor2 ? stdoutColor2.level : 0;
      object.level = options.level === void 0 ? colorLevel : options.level;
    };
    var ChalkClass = class {
      constructor(options) {
        return chalkFactory2(options);
      }
    };
    var chalkFactory2 = (options) => {
      const chalk3 = {};
      applyOptions2(chalk3, options);
      chalk3.template = (...arguments_) => chalkTag(chalk3.template, ...arguments_);
      Object.setPrototypeOf(chalk3, Chalk.prototype);
      Object.setPrototypeOf(chalk3.template, chalk3);
      chalk3.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      };
      chalk3.template.Instance = ChalkClass;
      return chalk3.template;
    };
    function Chalk(options) {
      return chalkFactory2(options);
    }
    for (const [styleName, style] of Object.entries(ansiStyles2)) {
      styles3[styleName] = {
        get() {
          const builder = createBuilder2(this, createStyler2(style.open, style.close, this._styler), this._isEmpty);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles3.visible = {
      get() {
        const builder = createBuilder2(this, this._styler, true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var usedModels2 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const model of usedModels2) {
      styles3[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler2(ansiStyles2.color[levelMapping2[level]][model](...arguments_), ansiStyles2.color.close, this._styler);
            return createBuilder2(this, styler, this._isEmpty);
          };
        }
      };
    }
    for (const model of usedModels2) {
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles3[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler2(ansiStyles2.bgColor[levelMapping2[level]][model](...arguments_), ansiStyles2.bgColor.close, this._styler);
            return createBuilder2(this, styler, this._isEmpty);
          };
        }
      };
    }
    var proto2 = Object.defineProperties(() => {
    }, {
      ...styles3,
      level: {
        enumerable: true,
        get() {
          return this._generator.level;
        },
        set(level) {
          this._generator.level = level;
        }
      }
    });
    var createStyler2 = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder2 = (self2, _styler, _isEmpty) => {
      const builder = (...arguments_) => {
        if (isArray(arguments_[0]) && isArray(arguments_[0].raw)) {
          return applyStyle2(builder, chalkTag(builder, ...arguments_));
        }
        return applyStyle2(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      };
      Object.setPrototypeOf(builder, proto2);
      builder._generator = self2;
      builder._styler = _styler;
      builder._isEmpty = _isEmpty;
      return builder;
    };
    var applyStyle2 = (self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2._isEmpty ? "" : string;
      }
      let styler = self2._styler;
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.indexOf("\x1B") !== -1) {
        while (styler !== void 0) {
          string = stringReplaceAll2(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex2(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    var template;
    var chalkTag = (chalk3, ...strings) => {
      const [firstString] = strings;
      if (!isArray(firstString) || !isArray(firstString.raw)) {
        return strings.join(" ");
      }
      const arguments_ = strings.slice(1);
      const parts = [firstString.raw[0]];
      for (let i = 1; i < firstString.length; i++) {
        parts.push(
          String(arguments_[i - 1]).replace(/[{}\\]/g, "\\$&"),
          String(firstString.raw[i])
        );
      }
      if (template === void 0) {
        template = require_templates();
      }
      return template(chalk3, parts.join(""));
    };
    Object.defineProperties(Chalk.prototype, styles3);
    var chalk2 = Chalk();
    chalk2.supportsColor = stdoutColor2;
    chalk2.stderr = Chalk({ level: stderrColor2 ? stderrColor2.level : 0 });
    chalk2.stderr.supportsColor = stderrColor2;
    module2.exports = chalk2;
  }
});

// node_modules/tinycolor2/cjs/tinycolor.js
var require_tinycolor = __commonJS({
  "node_modules/tinycolor2/cjs/tinycolor.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.tinycolor = factory());
    })(exports, function() {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      var trimLeft = /^\s+/;
      var trimRight = /\s+$/;
      function tinycolor(color, opts) {
        color = color ? color : "";
        opts = opts || {};
        if (color instanceof tinycolor) {
          return color;
        }
        if (!(this instanceof tinycolor)) {
          return new tinycolor(color, opts);
        }
        var rgb = inputToRGB(color);
        this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;
        if (this._r < 1)
          this._r = Math.round(this._r);
        if (this._g < 1)
          this._g = Math.round(this._g);
        if (this._b < 1)
          this._b = Math.round(this._b);
        this._ok = rgb.ok;
      }
      tinycolor.prototype = {
        isDark: function isDark() {
          return this.getBrightness() < 128;
        },
        isLight: function isLight() {
          return !this.isDark();
        },
        isValid: function isValid() {
          return this._ok;
        },
        getOriginalInput: function getOriginalInput() {
          return this._originalInput;
        },
        getFormat: function getFormat() {
          return this._format;
        },
        getAlpha: function getAlpha() {
          return this._a;
        },
        getBrightness: function getBrightness() {
          var rgb = this.toRgb();
          return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
        },
        getLuminance: function getLuminance() {
          var rgb = this.toRgb();
          var RsRGB, GsRGB, BsRGB, R, G, B;
          RsRGB = rgb.r / 255;
          GsRGB = rgb.g / 255;
          BsRGB = rgb.b / 255;
          if (RsRGB <= 0.03928)
            R = RsRGB / 12.92;
          else
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
          if (GsRGB <= 0.03928)
            G = GsRGB / 12.92;
          else
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
          if (BsRGB <= 0.03928)
            B = BsRGB / 12.92;
          else
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
          return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        },
        setAlpha: function setAlpha(value) {
          this._a = boundAlpha(value);
          this._roundA = Math.round(100 * this._a) / 100;
          return this;
        },
        toHsv: function toHsv() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          return {
            h: hsv.h * 360,
            s: hsv.s,
            v: hsv.v,
            a: this._a
          };
        },
        toHsvString: function toHsvString() {
          var hsv = rgbToHsv(this._r, this._g, this._b);
          var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
          return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
        },
        toHsl: function toHsl() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          return {
            h: hsl.h * 360,
            s: hsl.s,
            l: hsl.l,
            a: this._a
          };
        },
        toHslString: function toHslString() {
          var hsl = rgbToHsl(this._r, this._g, this._b);
          var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
          return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
        },
        toHex: function toHex(allow3Char) {
          return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function toHexString(allow3Char) {
          return "#" + this.toHex(allow3Char);
        },
        toHex8: function toHex8(allow4Char) {
          return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
        },
        toHex8String: function toHex8String(allow4Char) {
          return "#" + this.toHex8(allow4Char);
        },
        toRgb: function toRgb() {
          return {
            r: Math.round(this._r),
            g: Math.round(this._g),
            b: Math.round(this._b),
            a: this._a
          };
        },
        toRgbString: function toRgbString() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function toPercentageRgb() {
          return {
            r: Math.round(bound01(this._r, 255) * 100) + "%",
            g: Math.round(bound01(this._g, 255) * 100) + "%",
            b: Math.round(bound01(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function toPercentageRgbString() {
          return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function toName() {
          if (this._a === 0) {
            return "transparent";
          }
          if (this._a < 1) {
            return false;
          }
          return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function toFilter(secondColor) {
          var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
          var secondHex8String = hex8String;
          var gradientType = this._gradientType ? "GradientType = 1, " : "";
          if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
        },
        toString: function toString(format) {
          var formatSet = !!format;
          format = format || this._format;
          var formattedString = false;
          var hasAlpha = this._a < 1 && this._a >= 0;
          var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
          if (needsAlphaFormat) {
            if (format === "name" && this._a === 0) {
              return this.toName();
            }
            return this.toRgbString();
          }
          if (format === "rgb") {
            formattedString = this.toRgbString();
          }
          if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
          }
          if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
          }
          if (format === "hex3") {
            formattedString = this.toHexString(true);
          }
          if (format === "hex4") {
            formattedString = this.toHex8String(true);
          }
          if (format === "hex8") {
            formattedString = this.toHex8String();
          }
          if (format === "name") {
            formattedString = this.toName();
          }
          if (format === "hsl") {
            formattedString = this.toHslString();
          }
          if (format === "hsv") {
            formattedString = this.toHsvString();
          }
          return formattedString || this.toHexString();
        },
        clone: function clone() {
          return tinycolor(this.toString());
        },
        _applyModification: function _applyModification(fn, args) {
          var color = fn.apply(null, [this].concat([].slice.call(args)));
          this._r = color._r;
          this._g = color._g;
          this._b = color._b;
          this.setAlpha(color._a);
          return this;
        },
        lighten: function lighten() {
          return this._applyModification(_lighten, arguments);
        },
        brighten: function brighten() {
          return this._applyModification(_brighten, arguments);
        },
        darken: function darken() {
          return this._applyModification(_darken, arguments);
        },
        desaturate: function desaturate() {
          return this._applyModification(_desaturate, arguments);
        },
        saturate: function saturate() {
          return this._applyModification(_saturate, arguments);
        },
        greyscale: function greyscale() {
          return this._applyModification(_greyscale, arguments);
        },
        spin: function spin() {
          return this._applyModification(_spin, arguments);
        },
        _applyCombination: function _applyCombination(fn, args) {
          return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function analogous() {
          return this._applyCombination(_analogous, arguments);
        },
        complement: function complement() {
          return this._applyCombination(_complement, arguments);
        },
        monochromatic: function monochromatic() {
          return this._applyCombination(_monochromatic, arguments);
        },
        splitcomplement: function splitcomplement() {
          return this._applyCombination(_splitcomplement, arguments);
        },
        // Disabled until https://github.com/bgrins/TinyColor/issues/254
        // polyad: function (number) {
        //   return this._applyCombination(polyad, [number]);
        // },
        triad: function triad() {
          return this._applyCombination(polyad, [3]);
        },
        tetrad: function tetrad() {
          return this._applyCombination(polyad, [4]);
        }
      };
      tinycolor.fromRatio = function(color, opts) {
        if (_typeof(color) == "object") {
          var newColor = {};
          for (var i in color) {
            if (color.hasOwnProperty(i)) {
              if (i === "a") {
                newColor[i] = color[i];
              } else {
                newColor[i] = convertToPercentage(color[i]);
              }
            }
          }
          color = newColor;
        }
        return tinycolor(color, opts);
      };
      function inputToRGB(color) {
        var rgb = {
          r: 0,
          g: 0,
          b: 0
        };
        var a = 1;
        var s = null;
        var v = null;
        var l = null;
        var ok = false;
        var format = false;
        if (typeof color == "string") {
          color = stringInputToObject(color);
        }
        if (_typeof(color) == "object") {
          if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
          } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
          }
          if (color.hasOwnProperty("a")) {
            a = color.a;
          }
        }
        a = boundAlpha(a);
        return {
          ok,
          format: color.format || format,
          r: Math.min(255, Math.max(rgb.r, 0)),
          g: Math.min(255, Math.max(rgb.g, 0)),
          b: Math.min(255, Math.max(rgb.b, 0)),
          a
        };
      }
      function rgbToRgb(r, g, b) {
        return {
          r: bound01(r, 255) * 255,
          g: bound01(g, 255) * 255,
          b: bound01(b, 255) * 255
        };
      }
      function rgbToHsl(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
          h = s = 0;
        } else {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return {
          h,
          s,
          l
        };
      }
      function hslToRgb(h, s, l) {
        var r, g, b;
        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);
        function hue2rgb(p2, q2, t) {
          if (t < 0)
            t += 1;
          if (t > 1)
            t -= 1;
          if (t < 1 / 6)
            return p2 + (q2 - p2) * 6 * t;
          if (t < 1 / 2)
            return q2;
          if (t < 2 / 3)
            return p2 + (q2 - p2) * (2 / 3 - t) * 6;
          return p2;
        }
        if (s === 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        return {
          r: r * 255,
          g: g * 255,
          b: b * 255
        };
      }
      function rgbToHsv(r, g, b) {
        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, v = max;
        var d = max - min;
        s = max === 0 ? 0 : d / max;
        if (max == min) {
          h = 0;
        } else {
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return {
          h,
          s,
          v
        };
      }
      function hsvToRgb(h, s, v) {
        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);
        var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
        return {
          r: r * 255,
          g: g * 255,
          b: b * 255
        };
      }
      function rgbToHex(r, g, b, allow3Char) {
        var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }
        return hex.join("");
      }
      function rgbaToHex(r, g, b, a, allow4Char) {
        var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
        if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
          return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
        }
        return hex.join("");
      }
      function rgbaToArgbHex(r, g, b, a) {
        var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
        return hex.join("");
      }
      tinycolor.equals = function(color1, color2) {
        if (!color1 || !color2)
          return false;
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
      };
      tinycolor.random = function() {
        return tinycolor.fromRatio({
          r: Math.random(),
          g: Math.random(),
          b: Math.random()
        });
      };
      function _desaturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
      }
      function _saturate(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
      }
      function _greyscale(color) {
        return tinycolor(color).desaturate(100);
      }
      function _lighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
      }
      function _brighten(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var rgb = tinycolor(color).toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return tinycolor(rgb);
      }
      function _darken(color, amount) {
        amount = amount === 0 ? 0 : amount || 10;
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
      }
      function _spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
      }
      function _complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
      }
      function polyad(color, number) {
        if (isNaN(number) || number <= 0) {
          throw new Error("Argument to polyad must be a positive number");
        }
        var hsl = tinycolor(color).toHsl();
        var result = [tinycolor(color)];
        var step = 360 / number;
        for (var i = 1; i < number; i++) {
          result.push(tinycolor({
            h: (hsl.h + i * step) % 360,
            s: hsl.s,
            l: hsl.l
          }));
        }
        return result;
      }
      function _splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [tinycolor(color), tinycolor({
          h: (h + 72) % 360,
          s: hsl.s,
          l: hsl.l
        }), tinycolor({
          h: (h + 216) % 360,
          s: hsl.s,
          l: hsl.l
        })];
      }
      function _analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;
        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];
        for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
          hsl.h = (hsl.h + part) % 360;
          ret.push(tinycolor(hsl));
        }
        return ret;
      }
      function _monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;
        while (results--) {
          ret.push(tinycolor({
            h,
            s,
            v
          }));
          v = (v + modification) % 1;
        }
        return ret;
      }
      tinycolor.mix = function(color1, color2, amount) {
        amount = amount === 0 ? 0 : amount || 50;
        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();
        var p = amount / 100;
        var rgba = {
          r: (rgb2.r - rgb1.r) * p + rgb1.r,
          g: (rgb2.g - rgb1.g) * p + rgb1.g,
          b: (rgb2.b - rgb1.b) * p + rgb1.b,
          a: (rgb2.a - rgb1.a) * p + rgb1.a
        };
        return tinycolor(rgba);
      };
      tinycolor.readability = function(color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
      };
      tinycolor.isReadable = function(color1, color2, wcag2) {
        var readability = tinycolor.readability(color1, color2);
        var wcag2Parms, out;
        out = false;
        wcag2Parms = validateWCAG2Parms(wcag2);
        switch (wcag2Parms.level + wcag2Parms.size) {
          case "AAsmall":
          case "AAAlarge":
            out = readability >= 4.5;
            break;
          case "AAlarge":
            out = readability >= 3;
            break;
          case "AAAsmall":
            out = readability >= 7;
            break;
        }
        return out;
      };
      tinycolor.mostReadable = function(baseColor, colorList, args) {
        var bestColor = null;
        var bestScore = 0;
        var readability;
        var includeFallbackColors, level, size;
        args = args || {};
        includeFallbackColors = args.includeFallbackColors;
        level = args.level;
        size = args.size;
        for (var i = 0; i < colorList.length; i++) {
          readability = tinycolor.readability(baseColor, colorList[i]);
          if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
          }
        }
        if (tinycolor.isReadable(baseColor, bestColor, {
          level,
          size
        }) || !includeFallbackColors) {
          return bestColor;
        } else {
          args.includeFallbackColors = false;
          return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
        }
      };
      var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
      };
      var hexNames = tinycolor.hexNames = flip(names);
      function flip(o) {
        var flipped = {};
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
          }
        }
        return flipped;
      }
      function boundAlpha(a) {
        a = parseFloat(a);
        if (isNaN(a) || a < 0 || a > 1) {
          a = 1;
        }
        return a;
      }
      function bound01(n, max) {
        if (isOnePointZero(n))
          n = "100%";
        var processPercent = isPercentage(n);
        n = Math.min(max, Math.max(0, parseFloat(n)));
        if (processPercent) {
          n = parseInt(n * max, 10) / 100;
        }
        if (Math.abs(n - max) < 1e-6) {
          return 1;
        }
        return n % max / parseFloat(max);
      }
      function clamp01(val) {
        return Math.min(1, Math.max(0, val));
      }
      function parseIntFromHex(val) {
        return parseInt(val, 16);
      }
      function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
      }
      function isPercentage(n) {
        return typeof n === "string" && n.indexOf("%") != -1;
      }
      function pad2(c) {
        return c.length == 1 ? "0" + c : "" + c;
      }
      function convertToPercentage(n) {
        if (n <= 1) {
          n = n * 100 + "%";
        }
        return n;
      }
      function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
      }
      function convertHexToDecimal(h) {
        return parseIntFromHex(h) / 255;
      }
      var matchers = function() {
        var CSS_INTEGER = "[-\\+]?\\d+%?";
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
          rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
          hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
          hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
          hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
          hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      }();
      function isValidCSSUnit(color) {
        return !!matchers.CSS_UNIT.exec(color);
      }
      function stringInputToObject(color) {
        color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
        var named = false;
        if (names[color]) {
          color = names[color];
          named = true;
        } else if (color == "transparent") {
          return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
          };
        }
        var match;
        if (match = matchers.rgb.exec(color)) {
          return {
            r: match[1],
            g: match[2],
            b: match[3]
          };
        }
        if (match = matchers.rgba.exec(color)) {
          return {
            r: match[1],
            g: match[2],
            b: match[3],
            a: match[4]
          };
        }
        if (match = matchers.hsl.exec(color)) {
          return {
            h: match[1],
            s: match[2],
            l: match[3]
          };
        }
        if (match = matchers.hsla.exec(color)) {
          return {
            h: match[1],
            s: match[2],
            l: match[3],
            a: match[4]
          };
        }
        if (match = matchers.hsv.exec(color)) {
          return {
            h: match[1],
            s: match[2],
            v: match[3]
          };
        }
        if (match = matchers.hsva.exec(color)) {
          return {
            h: match[1],
            s: match[2],
            v: match[3],
            a: match[4]
          };
        }
        if (match = matchers.hex8.exec(color)) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
          };
        }
        if (match = matchers.hex6.exec(color)) {
          return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
          };
        }
        if (match = matchers.hex4.exec(color)) {
          return {
            r: parseIntFromHex(match[1] + "" + match[1]),
            g: parseIntFromHex(match[2] + "" + match[2]),
            b: parseIntFromHex(match[3] + "" + match[3]),
            a: convertHexToDecimal(match[4] + "" + match[4]),
            format: named ? "name" : "hex8"
          };
        }
        if (match = matchers.hex3.exec(color)) {
          return {
            r: parseIntFromHex(match[1] + "" + match[1]),
            g: parseIntFromHex(match[2] + "" + match[2]),
            b: parseIntFromHex(match[3] + "" + match[3]),
            format: named ? "name" : "hex"
          };
        }
        return false;
      }
      function validateWCAG2Parms(parms) {
        var level, size;
        parms = parms || {
          level: "AA",
          size: "small"
        };
        level = (parms.level || "AA").toUpperCase();
        size = (parms.size || "small").toLowerCase();
        if (level !== "AA" && level !== "AAA") {
          level = "AA";
        }
        if (size !== "small" && size !== "large") {
          size = "small";
        }
        return {
          level,
          size
        };
      }
      return tinycolor;
    });
  }
});

// node_modules/tinygradient/index.js
var require_tinygradient = __commonJS({
  "node_modules/tinygradient/index.js"(exports, module2) {
    var tinycolor = require_tinycolor();
    var RGBA_MAX = { r: 256, g: 256, b: 256, a: 1 };
    var HSVA_MAX = { h: 360, s: 1, v: 1, a: 1 };
    function stepize(start, end, steps) {
      let step = {};
      for (let k in start) {
        if (start.hasOwnProperty(k)) {
          step[k] = steps === 0 ? 0 : (end[k] - start[k]) / steps;
        }
      }
      return step;
    }
    function interpolate(step, start, i, max) {
      let color = {};
      for (let k in start) {
        if (start.hasOwnProperty(k)) {
          color[k] = step[k] * i + start[k];
          color[k] = color[k] < 0 ? color[k] + max[k] : max[k] !== 1 ? color[k] % max[k] : color[k];
        }
      }
      return color;
    }
    function interpolateRgb(stop1, stop2, steps) {
      const start = stop1.color.toRgb();
      const end = stop2.color.toRgb();
      const step = stepize(start, end, steps);
      let gradient2 = [stop1.color];
      for (let i = 1; i < steps; i++) {
        const color = interpolate(step, start, i, RGBA_MAX);
        gradient2.push(tinycolor(color));
      }
      return gradient2;
    }
    function interpolateHsv(stop1, stop2, steps, mode) {
      const start = stop1.color.toHsv();
      const end = stop2.color.toHsv();
      if (start.s === 0 || end.s === 0) {
        return interpolateRgb(stop1, stop2, steps);
      }
      let trigonometric;
      if (typeof mode === "boolean") {
        trigonometric = mode;
      } else {
        const trigShortest = start.h < end.h && end.h - start.h < 180 || start.h > end.h && start.h - end.h > 180;
        trigonometric = mode === "long" && trigShortest || mode === "short" && !trigShortest;
      }
      const step = stepize(start, end, steps);
      let gradient2 = [stop1.color];
      let diff;
      if (start.h <= end.h && !trigonometric || start.h >= end.h && trigonometric) {
        diff = end.h - start.h;
      } else if (trigonometric) {
        diff = 360 - end.h + start.h;
      } else {
        diff = 360 - start.h + end.h;
      }
      step.h = Math.pow(-1, trigonometric ? 1 : 0) * Math.abs(diff) / steps;
      for (let i = 1; i < steps; i++) {
        const color = interpolate(step, start, i, HSVA_MAX);
        gradient2.push(tinycolor(color));
      }
      return gradient2;
    }
    function computeSubsteps(stops, steps) {
      const l = stops.length;
      steps = parseInt(steps, 10);
      if (isNaN(steps) || steps < 2) {
        throw new Error("Invalid number of steps (< 2)");
      }
      if (steps < l) {
        throw new Error("Number of steps cannot be inferior to number of stops");
      }
      let substeps = [];
      for (let i = 1; i < l; i++) {
        const step = (steps - 1) * (stops[i].pos - stops[i - 1].pos);
        substeps.push(Math.max(1, Math.round(step)));
      }
      let totalSubsteps = 1;
      for (let n = l - 1; n--; )
        totalSubsteps += substeps[n];
      while (totalSubsteps !== steps) {
        if (totalSubsteps < steps) {
          const min = Math.min.apply(null, substeps);
          substeps[substeps.indexOf(min)]++;
          totalSubsteps++;
        } else {
          const max = Math.max.apply(null, substeps);
          substeps[substeps.indexOf(max)]--;
          totalSubsteps--;
        }
      }
      return substeps;
    }
    function computeAt(stops, pos, method, max) {
      if (pos < 0 || pos > 1) {
        throw new Error("Position must be between 0 and 1");
      }
      let start, end;
      for (let i = 0, l = stops.length; i < l - 1; i++) {
        if (pos >= stops[i].pos && pos < stops[i + 1].pos) {
          start = stops[i];
          end = stops[i + 1];
          break;
        }
      }
      if (!start) {
        start = end = stops[stops.length - 1];
      }
      const step = stepize(start.color[method](), end.color[method](), (end.pos - start.pos) * 100);
      const color = interpolate(step, start.color[method](), (pos - start.pos) * 100, max);
      return tinycolor(color);
    }
    var TinyGradient = class _TinyGradient {
      /**
       * @param {StopInput[]|ColorInput[]} stops
       * @returns {TinyGradient}
       */
      constructor(stops) {
        if (stops.length < 2) {
          throw new Error("Invalid number of stops (< 2)");
        }
        const havingPositions = stops[0].pos !== void 0;
        let l = stops.length;
        let p = -1;
        let lastColorLess = false;
        this.stops = stops.map((stop, i) => {
          const hasPosition = stop.pos !== void 0;
          if (havingPositions ^ hasPosition) {
            throw new Error("Cannot mix positionned and not posionned color stops");
          }
          if (hasPosition) {
            const hasColor = stop.color !== void 0;
            if (!hasColor && (lastColorLess || i === 0 || i === l - 1)) {
              throw new Error("Cannot define two consecutive position-only stops");
            }
            lastColorLess = !hasColor;
            stop = {
              color: hasColor ? tinycolor(stop.color) : null,
              colorLess: !hasColor,
              pos: stop.pos
            };
            if (stop.pos < 0 || stop.pos > 1) {
              throw new Error("Color stops positions must be between 0 and 1");
            } else if (stop.pos < p) {
              throw new Error("Color stops positions are not ordered");
            }
            p = stop.pos;
          } else {
            stop = {
              color: tinycolor(stop.color !== void 0 ? stop.color : stop),
              pos: i / (l - 1)
            };
          }
          return stop;
        });
        if (this.stops[0].pos !== 0) {
          this.stops.unshift({
            color: this.stops[0].color,
            pos: 0
          });
          l++;
        }
        if (this.stops[l - 1].pos !== 1) {
          this.stops.push({
            color: this.stops[l - 1].color,
            pos: 1
          });
        }
      }
      /**
       * Return new instance with reversed stops
       * @return {TinyGradient}
       */
      reverse() {
        let stops = [];
        this.stops.forEach(function(stop) {
          stops.push({
            color: stop.color,
            pos: 1 - stop.pos
          });
        });
        return new _TinyGradient(stops.reverse());
      }
      /**
       * Return new instance with looped stops
       * @return {TinyGradient}
       */
      loop() {
        let stops1 = [];
        let stops2 = [];
        this.stops.forEach((stop) => {
          stops1.push({
            color: stop.color,
            pos: stop.pos / 2
          });
        });
        this.stops.slice(0, -1).forEach((stop) => {
          stops2.push({
            color: stop.color,
            pos: 1 - stop.pos / 2
          });
        });
        return new _TinyGradient(stops1.concat(stops2.reverse()));
      }
      /**
       * Generate gradient with RGBa interpolation
       * @param {number} steps
       * @return {tinycolor[]}
       */
      rgb(steps) {
        const substeps = computeSubsteps(this.stops, steps);
        let gradient2 = [];
        this.stops.forEach((stop, i) => {
          if (stop.colorLess) {
            stop.color = interpolateRgb(this.stops[i - 1], this.stops[i + 1], 2)[1];
          }
        });
        for (let i = 0, l = this.stops.length; i < l - 1; i++) {
          const rgb = interpolateRgb(this.stops[i], this.stops[i + 1], substeps[i]);
          gradient2.splice(gradient2.length, 0, ...rgb);
        }
        gradient2.push(this.stops[this.stops.length - 1].color);
        return gradient2;
      }
      /**
       * Generate gradient with HSVa interpolation
       * @param {number} steps
       * @param {boolean|'long'|'short'} [mode=false]
       *    - false to step in clockwise
       *    - true to step in trigonometric order
       *    - 'short' to use the shortest way
       *    - 'long' to use the longest way
       * @return {tinycolor[]}
       */
      hsv(steps, mode) {
        const substeps = computeSubsteps(this.stops, steps);
        let gradient2 = [];
        this.stops.forEach((stop, i) => {
          if (stop.colorLess) {
            stop.color = interpolateHsv(this.stops[i - 1], this.stops[i + 1], 2, mode)[1];
          }
        });
        for (let i = 0, l = this.stops.length; i < l - 1; i++) {
          const hsv = interpolateHsv(this.stops[i], this.stops[i + 1], substeps[i], mode);
          gradient2.splice(gradient2.length, 0, ...hsv);
        }
        gradient2.push(this.stops[this.stops.length - 1].color);
        return gradient2;
      }
      /**
       * Generate CSS3 command (no prefix) for this gradient
       * @param {String} [mode=linear] - 'linear' or 'radial'
       * @param {String} [direction] - default is 'to right' or 'ellipse at center'
       * @return {String}
       */
      css(mode, direction) {
        mode = mode || "linear";
        direction = direction || (mode === "linear" ? "to right" : "ellipse at center");
        let css = mode + "-gradient(" + direction;
        this.stops.forEach(function(stop) {
          css += ", " + (stop.colorLess ? "" : stop.color.toRgbString() + " ") + stop.pos * 100 + "%";
        });
        css += ")";
        return css;
      }
      /**
       * Returns the color at specific position with RGBa interpolation
       * @param {number} pos, between 0 and 1
       * @return {tinycolor}
       */
      rgbAt(pos) {
        return computeAt(this.stops, pos, "toRgb", RGBA_MAX);
      }
      /**
       * Returns the color at specific position with HSVa interpolation
       * @param {number} pos, between 0 and 1
       * @return {tinycolor}
       */
      hsvAt(pos) {
        return computeAt(this.stops, pos, "toHsv", HSVA_MAX);
      }
    };
    module2.exports = function(stops) {
      if (arguments.length === 1) {
        if (!Array.isArray(arguments[0])) {
          throw new Error('"stops" is not an array');
        }
        stops = arguments[0];
      } else {
        stops = Array.prototype.slice.call(arguments);
      }
      return new TinyGradient(stops);
    };
  }
});

// node_modules/gradient-string/index.js
var require_gradient_string = __commonJS({
  "node_modules/gradient-string/index.js"(exports, module2) {
    "use strict";
    var chalk2 = require_source();
    var tinygradient = require_tinygradient();
    var forbiddenChars = /\s/g;
    function InitGradient(...args) {
      const grad = tinygradient.apply(this, args);
      const ret = (str, opts) => applyGradient(str ? str.toString() : "", grad, opts);
      ret.multiline = (str, opts) => multilineGradient(str ? str.toString() : "", grad, opts);
      return ret;
    }
    var getColors = (gradient2, options, count) => options.interpolation.toLowerCase() === "hsv" ? gradient2.hsv(count, options.hsvSpin.toLowerCase()) : gradient2.rgb(count);
    function applyGradient(str, gradient2, opts) {
      const options = validateOptions(opts);
      const colorsCount = Math.max(str.replace(forbiddenChars, "").length, gradient2.stops.length);
      const colors = getColors(gradient2, options, colorsCount);
      let result = "";
      for (const s of str) {
        result += s.match(forbiddenChars) ? s : chalk2.hex(colors.shift().toHex())(s);
      }
      return result;
    }
    function multilineGradient(str, gradient2, opts) {
      const options = validateOptions(opts);
      const lines = str.split("\n");
      const maxLength = Math.max.apply(null, lines.map((l) => l.length).concat([gradient2.stops.length]));
      const colors = getColors(gradient2, options, maxLength);
      const results = [];
      for (const line of lines) {
        const lineColors = colors.slice(0);
        let lineResult = "";
        for (const l of line) {
          lineResult += chalk2.hex(lineColors.shift().toHex())(l);
        }
        results.push(lineResult);
      }
      return results.join("\n");
    }
    function validateOptions(opts) {
      const options = { interpolation: "rgb", hsvSpin: "short", ...opts };
      if (opts !== void 0 && typeof opts !== "object") {
        throw new TypeError(`Expected \`options\` to be an \`object\`, got \`${typeof opts}\``);
      }
      if (typeof options.interpolation !== "string") {
        throw new TypeError(`Expected \`options.interpolation\` to be a \`string\`, got \`${typeof options.interpolation}\``);
      }
      if (options.interpolation.toLowerCase() === "hsv" && typeof options.hsvSpin !== "string") {
        throw new TypeError(`Expected \`options.hsvSpin\` to be a \`string\`, got \`${typeof options.hsvSpin}\``);
      }
      return options;
    }
    var aliases = {
      atlas: { colors: ["#feac5e", "#c779d0", "#4bc0c8"], options: {} },
      cristal: { colors: ["#bdfff3", "#4ac29a"], options: {} },
      teen: { colors: ["#77a1d3", "#79cbca", "#e684ae"], options: {} },
      mind: { colors: ["#473b7b", "#3584a7", "#30d2be"], options: {} },
      morning: { colors: ["#ff5f6d", "#ffc371"], options: { interpolation: "hsv" } },
      vice: { colors: ["#5ee7df", "#b490ca"], options: { interpolation: "hsv" } },
      passion: { colors: ["#f43b47", "#453a94"], options: {} },
      fruit: { colors: ["#ff4e50", "#f9d423"], options: {} },
      instagram: { colors: ["#833ab4", "#fd1d1d", "#fcb045"], options: {} },
      retro: { colors: ["#3f51b1", "#5a55ae", "#7b5fac", "#8f6aae", "#a86aa4", "#cc6b8e", "#f18271", "#f3a469", "#f7c978"], options: {} },
      summer: { colors: ["#fdbb2d", "#22c1c3"], options: {} },
      rainbow: { colors: ["#ff0000", "#ff0100"], options: { interpolation: "hsv", hsvSpin: "long" } },
      pastel: { colors: ["#74ebd5", "#74ecd5"], options: { interpolation: "hsv", hsvSpin: "long" } }
    };
    module2.exports = InitGradient;
    for (const a in aliases) {
      module2.exports[a] = (str) => new InitGradient(aliases[a].colors)(str, aliases[a].options);
      module2.exports[a].multiline = (str) => new InitGradient(aliases[a].colors).multiline(str, aliases[a].options);
    }
  }
});

// node_modules/kleur/index.js
var require_kleur = __commonJS({
  "node_modules/kleur/index.js"(exports, module2) {
    "use strict";
    var { FORCE_COLOR, NODE_DISABLE_COLORS, TERM } = process.env;
    var $ = {
      enabled: !NODE_DISABLE_COLORS && TERM !== "dumb" && FORCE_COLOR !== "0",
      // modifiers
      reset: init2(0, 0),
      bold: init2(1, 22),
      dim: init2(2, 22),
      italic: init2(3, 23),
      underline: init2(4, 24),
      inverse: init2(7, 27),
      hidden: init2(8, 28),
      strikethrough: init2(9, 29),
      // colors
      black: init2(30, 39),
      red: init2(31, 39),
      green: init2(32, 39),
      yellow: init2(33, 39),
      blue: init2(34, 39),
      magenta: init2(35, 39),
      cyan: init2(36, 39),
      white: init2(37, 39),
      gray: init2(90, 39),
      grey: init2(90, 39),
      // background colors
      bgBlack: init2(40, 49),
      bgRed: init2(41, 49),
      bgGreen: init2(42, 49),
      bgYellow: init2(43, 49),
      bgBlue: init2(44, 49),
      bgMagenta: init2(45, 49),
      bgCyan: init2(46, 49),
      bgWhite: init2(47, 49)
    };
    function run(arr, str) {
      let i = 0, tmp, beg = "", end = "";
      for (; i < arr.length; i++) {
        tmp = arr[i];
        beg += tmp.open;
        end += tmp.close;
        if (str.includes(tmp.close)) {
          str = str.replace(tmp.rgx, tmp.close + tmp.open);
        }
      }
      return beg + str + end;
    }
    function chain(has, keys) {
      let ctx = { has, keys };
      ctx.reset = $.reset.bind(ctx);
      ctx.bold = $.bold.bind(ctx);
      ctx.dim = $.dim.bind(ctx);
      ctx.italic = $.italic.bind(ctx);
      ctx.underline = $.underline.bind(ctx);
      ctx.inverse = $.inverse.bind(ctx);
      ctx.hidden = $.hidden.bind(ctx);
      ctx.strikethrough = $.strikethrough.bind(ctx);
      ctx.black = $.black.bind(ctx);
      ctx.red = $.red.bind(ctx);
      ctx.green = $.green.bind(ctx);
      ctx.yellow = $.yellow.bind(ctx);
      ctx.blue = $.blue.bind(ctx);
      ctx.magenta = $.magenta.bind(ctx);
      ctx.cyan = $.cyan.bind(ctx);
      ctx.white = $.white.bind(ctx);
      ctx.gray = $.gray.bind(ctx);
      ctx.grey = $.grey.bind(ctx);
      ctx.bgBlack = $.bgBlack.bind(ctx);
      ctx.bgRed = $.bgRed.bind(ctx);
      ctx.bgGreen = $.bgGreen.bind(ctx);
      ctx.bgYellow = $.bgYellow.bind(ctx);
      ctx.bgBlue = $.bgBlue.bind(ctx);
      ctx.bgMagenta = $.bgMagenta.bind(ctx);
      ctx.bgCyan = $.bgCyan.bind(ctx);
      ctx.bgWhite = $.bgWhite.bind(ctx);
      return ctx;
    }
    function init2(open, close) {
      let blk = {
        open: `\x1B[${open}m`,
        close: `\x1B[${close}m`,
        rgx: new RegExp(`\\x1b\\[${close}m`, "g")
      };
      return function(txt) {
        if (this !== void 0 && this.has !== void 0) {
          this.has.includes(open) || (this.has.push(open), this.keys.push(blk));
          return txt === void 0 ? this : $.enabled ? run(this.keys, txt + "") : txt + "";
        }
        return txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt + "") : txt + "";
      };
    }
    module2.exports = $;
  }
});

// node_modules/prompts/lib/util/action.js
var require_action = __commonJS({
  "node_modules/prompts/lib/util/action.js"(exports, module2) {
    "use strict";
    module2.exports = (key, isSelect) => {
      if (key.meta && key.name !== "escape")
        return;
      if (key.ctrl) {
        if (key.name === "a")
          return "first";
        if (key.name === "c")
          return "abort";
        if (key.name === "d")
          return "abort";
        if (key.name === "e")
          return "last";
        if (key.name === "g")
          return "reset";
      }
      if (isSelect) {
        if (key.name === "j")
          return "down";
        if (key.name === "k")
          return "up";
      }
      if (key.name === "return")
        return "submit";
      if (key.name === "enter")
        return "submit";
      if (key.name === "backspace")
        return "delete";
      if (key.name === "delete")
        return "deleteForward";
      if (key.name === "abort")
        return "abort";
      if (key.name === "escape")
        return "exit";
      if (key.name === "tab")
        return "next";
      if (key.name === "pagedown")
        return "nextPage";
      if (key.name === "pageup")
        return "prevPage";
      if (key.name === "home")
        return "home";
      if (key.name === "end")
        return "end";
      if (key.name === "up")
        return "up";
      if (key.name === "down")
        return "down";
      if (key.name === "right")
        return "right";
      if (key.name === "left")
        return "left";
      return false;
    };
  }
});

// node_modules/prompts/lib/util/strip.js
var require_strip = __commonJS({
  "node_modules/prompts/lib/util/strip.js"(exports, module2) {
    "use strict";
    module2.exports = (str) => {
      const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))"
      ].join("|");
      const RGX = new RegExp(pattern, "g");
      return typeof str === "string" ? str.replace(RGX, "") : str;
    };
  }
});

// node_modules/sisteransi/src/index.js
var require_src = __commonJS({
  "node_modules/sisteransi/src/index.js"(exports, module2) {
    "use strict";
    var ESC = "\x1B";
    var CSI = `${ESC}[`;
    var beep = "\x07";
    var cursor = {
      to(x, y) {
        if (!y)
          return `${CSI}${x + 1}G`;
        return `${CSI}${y + 1};${x + 1}H`;
      },
      move(x, y) {
        let ret = "";
        if (x < 0)
          ret += `${CSI}${-x}D`;
        else if (x > 0)
          ret += `${CSI}${x}C`;
        if (y < 0)
          ret += `${CSI}${-y}A`;
        else if (y > 0)
          ret += `${CSI}${y}B`;
        return ret;
      },
      up: (count = 1) => `${CSI}${count}A`,
      down: (count = 1) => `${CSI}${count}B`,
      forward: (count = 1) => `${CSI}${count}C`,
      backward: (count = 1) => `${CSI}${count}D`,
      nextLine: (count = 1) => `${CSI}E`.repeat(count),
      prevLine: (count = 1) => `${CSI}F`.repeat(count),
      left: `${CSI}G`,
      hide: `${CSI}?25l`,
      show: `${CSI}?25h`,
      save: `${ESC}7`,
      restore: `${ESC}8`
    };
    var scroll = {
      up: (count = 1) => `${CSI}S`.repeat(count),
      down: (count = 1) => `${CSI}T`.repeat(count)
    };
    var erase = {
      screen: `${CSI}2J`,
      up: (count = 1) => `${CSI}1J`.repeat(count),
      down: (count = 1) => `${CSI}J`.repeat(count),
      line: `${CSI}2K`,
      lineEnd: `${CSI}K`,
      lineStart: `${CSI}1K`,
      lines(count) {
        let clear = "";
        for (let i = 0; i < count; i++)
          clear += this.line + (i < count - 1 ? cursor.up() : "");
        if (count)
          clear += cursor.left;
        return clear;
      }
    };
    module2.exports = { cursor, scroll, erase, beep };
  }
});

// node_modules/prompts/lib/util/clear.js
var require_clear = __commonJS({
  "node_modules/prompts/lib/util/clear.js"(exports, module2) {
    "use strict";
    var strip = require_strip();
    var { erase, cursor } = require_src();
    var width = (str) => [...strip(str)].length;
    module2.exports = function(prompt, perLine) {
      if (!perLine)
        return erase.line + cursor.to(0);
      let rows = 0;
      const lines = prompt.split(/\r?\n/);
      for (let line of lines) {
        rows += 1 + Math.floor(Math.max(width(line) - 1, 0) / perLine);
      }
      return erase.lines(rows);
    };
  }
});

// node_modules/prompts/lib/util/figures.js
var require_figures = __commonJS({
  "node_modules/prompts/lib/util/figures.js"(exports, module2) {
    "use strict";
    var main = {
      arrowUp: "\u2191",
      arrowDown: "\u2193",
      arrowLeft: "\u2190",
      arrowRight: "\u2192",
      radioOn: "\u25C9",
      radioOff: "\u25EF",
      tick: "\u2714",
      cross: "\u2716",
      ellipsis: "\u2026",
      pointerSmall: "\u203A",
      line: "\u2500",
      pointer: "\u276F"
    };
    var win = {
      arrowUp: main.arrowUp,
      arrowDown: main.arrowDown,
      arrowLeft: main.arrowLeft,
      arrowRight: main.arrowRight,
      radioOn: "(*)",
      radioOff: "( )",
      tick: "\u221A",
      cross: "\xD7",
      ellipsis: "...",
      pointerSmall: "\xBB",
      line: "\u2500",
      pointer: ">"
    };
    var figures = process.platform === "win32" ? win : main;
    module2.exports = figures;
  }
});

// node_modules/prompts/lib/util/style.js
var require_style = __commonJS({
  "node_modules/prompts/lib/util/style.js"(exports, module2) {
    "use strict";
    var c = require_kleur();
    var figures = require_figures();
    var styles3 = Object.freeze({
      password: { scale: 1, render: (input) => "*".repeat(input.length) },
      emoji: { scale: 2, render: (input) => "\u{1F603}".repeat(input.length) },
      invisible: { scale: 0, render: (input) => "" },
      default: { scale: 1, render: (input) => `${input}` }
    });
    var render = (type) => styles3[type] || styles3.default;
    var symbols = Object.freeze({
      aborted: c.red(figures.cross),
      done: c.green(figures.tick),
      exited: c.yellow(figures.cross),
      default: c.cyan("?")
    });
    var symbol = (done, aborted, exited) => aborted ? symbols.aborted : exited ? symbols.exited : done ? symbols.done : symbols.default;
    var delimiter = (completing) => c.gray(completing ? figures.ellipsis : figures.pointerSmall);
    var item = (expandable, expanded) => c.gray(expandable ? expanded ? figures.pointerSmall : "+" : figures.line);
    module2.exports = {
      styles: styles3,
      render,
      symbols,
      symbol,
      delimiter,
      item
    };
  }
});

// node_modules/prompts/lib/util/lines.js
var require_lines = __commonJS({
  "node_modules/prompts/lib/util/lines.js"(exports, module2) {
    "use strict";
    var strip = require_strip();
    module2.exports = function(msg, perLine) {
      let lines = String(strip(msg) || "").split(/\r?\n/);
      if (!perLine)
        return lines.length;
      return lines.map((l) => Math.ceil(l.length / perLine)).reduce((a, b) => a + b);
    };
  }
});

// node_modules/prompts/lib/util/wrap.js
var require_wrap = __commonJS({
  "node_modules/prompts/lib/util/wrap.js"(exports, module2) {
    "use strict";
    module2.exports = (msg, opts = {}) => {
      const tab = Number.isSafeInteger(parseInt(opts.margin)) ? new Array(parseInt(opts.margin)).fill(" ").join("") : opts.margin || "";
      const width = opts.width;
      return (msg || "").split(/\r?\n/g).map((line) => line.split(/\s+/g).reduce((arr, w) => {
        if (w.length + tab.length >= width || arr[arr.length - 1].length + w.length + 1 < width)
          arr[arr.length - 1] += ` ${w}`;
        else
          arr.push(`${tab}${w}`);
        return arr;
      }, [tab]).join("\n")).join("\n");
    };
  }
});

// node_modules/prompts/lib/util/entriesToDisplay.js
var require_entriesToDisplay = __commonJS({
  "node_modules/prompts/lib/util/entriesToDisplay.js"(exports, module2) {
    "use strict";
    module2.exports = (cursor, total, maxVisible) => {
      maxVisible = maxVisible || total;
      let startIndex = Math.min(total - maxVisible, cursor - Math.floor(maxVisible / 2));
      if (startIndex < 0)
        startIndex = 0;
      let endIndex = Math.min(startIndex + maxVisible, total);
      return { startIndex, endIndex };
    };
  }
});

// node_modules/prompts/lib/util/index.js
var require_util2 = __commonJS({
  "node_modules/prompts/lib/util/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      action: require_action(),
      clear: require_clear(),
      style: require_style(),
      strip: require_strip(),
      figures: require_figures(),
      lines: require_lines(),
      wrap: require_wrap(),
      entriesToDisplay: require_entriesToDisplay()
    };
  }
});

// node_modules/prompts/lib/elements/prompt.js
var require_prompt = __commonJS({
  "node_modules/prompts/lib/elements/prompt.js"(exports, module2) {
    "use strict";
    var readline = require("readline");
    var { action } = require_util2();
    var EventEmitter = require("events");
    var { beep, cursor } = require_src();
    var color = require_kleur();
    var Prompt = class extends EventEmitter {
      constructor(opts = {}) {
        super();
        this.firstRender = true;
        this.in = opts.stdin || process.stdin;
        this.out = opts.stdout || process.stdout;
        this.onRender = (opts.onRender || (() => void 0)).bind(this);
        const rl = readline.createInterface({ input: this.in, escapeCodeTimeout: 50 });
        readline.emitKeypressEvents(this.in, rl);
        if (this.in.isTTY)
          this.in.setRawMode(true);
        const isSelect = ["SelectPrompt", "MultiselectPrompt"].indexOf(this.constructor.name) > -1;
        const keypress = (str, key) => {
          let a = action(key, isSelect);
          if (a === false) {
            this._ && this._(str, key);
          } else if (typeof this[a] === "function") {
            this[a](key);
          } else {
            this.bell();
          }
        };
        this.close = () => {
          this.out.write(cursor.show);
          this.in.removeListener("keypress", keypress);
          if (this.in.isTTY)
            this.in.setRawMode(false);
          rl.close();
          this.emit(this.aborted ? "abort" : this.exited ? "exit" : "submit", this.value);
          this.closed = true;
        };
        this.in.on("keypress", keypress);
      }
      fire() {
        this.emit("state", {
          value: this.value,
          aborted: !!this.aborted,
          exited: !!this.exited
        });
      }
      bell() {
        this.out.write(beep);
      }
      render() {
        this.onRender(color);
        if (this.firstRender)
          this.firstRender = false;
      }
    };
    module2.exports = Prompt;
  }
});

// node_modules/prompts/lib/elements/text.js
var require_text = __commonJS({
  "node_modules/prompts/lib/elements/text.js"(exports, module2) {
    var color = require_kleur();
    var Prompt = require_prompt();
    var { erase, cursor } = require_src();
    var { style, clear, lines, figures } = require_util2();
    var TextPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.transform = style.render(opts.style);
        this.scale = this.transform.scale;
        this.msg = opts.message;
        this.initial = opts.initial || ``;
        this.validator = opts.validate || (() => true);
        this.value = ``;
        this.errorMsg = opts.error || `Please Enter A Valid Value`;
        this.cursor = Number(!!this.initial);
        this.cursorOffset = 0;
        this.clear = clear(``, this.out.columns);
        this.render();
      }
      set value(v) {
        if (!v && this.initial) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(this.initial));
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(v);
        }
        this._value = v;
        this.fire();
      }
      get value() {
        return this._value;
      }
      reset() {
        this.value = ``;
        this.cursor = Number(!!this.initial);
        this.cursorOffset = 0;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.value = this.value || this.initial;
        this.done = this.aborted = true;
        this.error = false;
        this.red = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      async validate() {
        let valid = await this.validator(this.value);
        if (typeof valid === `string`) {
          this.errorMsg = valid;
          valid = false;
        }
        this.error = !valid;
      }
      async submit() {
        this.value = this.value || this.initial;
        this.cursorOffset = 0;
        this.cursor = this.rendered.length;
        await this.validate();
        if (this.error) {
          this.red = true;
          this.fire();
          this.render();
          return;
        }
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      next() {
        if (!this.placeholder)
          return this.bell();
        this.value = this.initial;
        this.cursor = this.rendered.length;
        this.fire();
        this.render();
      }
      moveCursor(n) {
        if (this.placeholder)
          return;
        this.cursor = this.cursor + n;
        this.cursorOffset += n;
      }
      _(c, key) {
        let s1 = this.value.slice(0, this.cursor);
        let s2 = this.value.slice(this.cursor);
        this.value = `${s1}${c}${s2}`;
        this.red = false;
        this.cursor = this.placeholder ? 0 : s1.length + 1;
        this.render();
      }
      delete() {
        if (this.isCursorAtStart())
          return this.bell();
        let s1 = this.value.slice(0, this.cursor - 1);
        let s2 = this.value.slice(this.cursor);
        this.value = `${s1}${s2}`;
        this.red = false;
        if (this.isCursorAtStart()) {
          this.cursorOffset = 0;
        } else {
          this.cursorOffset++;
          this.moveCursor(-1);
        }
        this.render();
      }
      deleteForward() {
        if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
          return this.bell();
        let s1 = this.value.slice(0, this.cursor);
        let s2 = this.value.slice(this.cursor + 1);
        this.value = `${s1}${s2}`;
        this.red = false;
        if (this.isCursorAtEnd()) {
          this.cursorOffset = 0;
        } else {
          this.cursorOffset++;
        }
        this.render();
      }
      first() {
        this.cursor = 0;
        this.render();
      }
      last() {
        this.cursor = this.value.length;
        this.render();
      }
      left() {
        if (this.cursor <= 0 || this.placeholder)
          return this.bell();
        this.moveCursor(-1);
        this.render();
      }
      right() {
        if (this.cursor * this.scale >= this.rendered.length || this.placeholder)
          return this.bell();
        this.moveCursor(1);
        this.render();
      }
      isCursorAtStart() {
        return this.cursor === 0 || this.placeholder && this.cursor === 1;
      }
      isCursorAtEnd() {
        return this.cursor === this.rendered.length || this.placeholder && this.cursor === this.rendered.length + 1;
      }
      render() {
        if (this.closed)
          return;
        if (!this.firstRender) {
          if (this.outputError)
            this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
          this.out.write(clear(this.outputText, this.out.columns));
        }
        super.render();
        this.outputError = "";
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          this.red ? color.red(this.rendered) : this.rendered
        ].join(` `);
        if (this.error) {
          this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? " " : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore + cursor.move(this.cursorOffset, 0));
      }
    };
    module2.exports = TextPrompt;
  }
});

// node_modules/prompts/lib/elements/select.js
var require_select = __commonJS({
  "node_modules/prompts/lib/elements/select.js"(exports, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt();
    var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
    var { cursor } = require_src();
    var SelectPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.hint = opts.hint || "- Use arrow-keys. Return to submit.";
        this.warn = opts.warn || "- This option is disabled";
        this.cursor = opts.initial || 0;
        this.choices = opts.choices.map((ch, idx) => {
          if (typeof ch === "string")
            ch = { title: ch, value: idx };
          return {
            title: ch && (ch.title || ch.value || ch),
            value: ch && (ch.value === void 0 ? idx : ch.value),
            description: ch && ch.description,
            selected: ch && ch.selected,
            disabled: ch && ch.disabled
          };
        });
        this.optionsPerPage = opts.optionsPerPage || 10;
        this.value = (this.choices[this.cursor] || {}).value;
        this.clear = clear("", this.out.columns);
        this.render();
      }
      moveCursor(n) {
        this.cursor = n;
        this.value = this.choices[n].value;
        this.fire();
      }
      reset() {
        this.moveCursor(0);
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        if (!this.selection.disabled) {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        } else
          this.bell();
      }
      first() {
        this.moveCursor(0);
        this.render();
      }
      last() {
        this.moveCursor(this.choices.length - 1);
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.moveCursor(this.choices.length - 1);
        } else {
          this.moveCursor(this.cursor - 1);
        }
        this.render();
      }
      down() {
        if (this.cursor === this.choices.length - 1) {
          this.moveCursor(0);
        } else {
          this.moveCursor(this.cursor + 1);
        }
        this.render();
      }
      next() {
        this.moveCursor((this.cursor + 1) % this.choices.length);
        this.render();
      }
      _(c, key) {
        if (c === " ")
          return this.submit();
      }
      get selection() {
        return this.choices[this.cursor];
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        else
          this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        let { startIndex, endIndex } = entriesToDisplay(this.cursor, this.choices.length, this.optionsPerPage);
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.done ? this.selection.title : this.selection.disabled ? color.yellow(this.warn) : color.gray(this.hint)
        ].join(" ");
        if (!this.done) {
          this.outputText += "\n";
          for (let i = startIndex; i < endIndex; i++) {
            let title, prefix, desc = "", v = this.choices[i];
            if (i === startIndex && startIndex > 0) {
              prefix = figures.arrowUp;
            } else if (i === endIndex - 1 && endIndex < this.choices.length) {
              prefix = figures.arrowDown;
            } else {
              prefix = " ";
            }
            if (v.disabled) {
              title = this.cursor === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
              prefix = (this.cursor === i ? color.bold().gray(figures.pointer) + " " : "  ") + prefix;
            } else {
              title = this.cursor === i ? color.cyan().underline(v.title) : v.title;
              prefix = (this.cursor === i ? color.cyan(figures.pointer) + " " : "  ") + prefix;
              if (v.description && this.cursor === i) {
                desc = ` - ${v.description}`;
                if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
                  desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
                }
              }
            }
            this.outputText += `${prefix} ${title}${color.gray(desc)}
`;
          }
        }
        this.out.write(this.outputText);
      }
    };
    module2.exports = SelectPrompt;
  }
});

// node_modules/prompts/lib/elements/toggle.js
var require_toggle = __commonJS({
  "node_modules/prompts/lib/elements/toggle.js"(exports, module2) {
    var color = require_kleur();
    var Prompt = require_prompt();
    var { style, clear } = require_util2();
    var { cursor, erase } = require_src();
    var TogglePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.value = !!opts.initial;
        this.active = opts.active || "on";
        this.inactive = opts.inactive || "off";
        this.initialValue = this.value;
        this.render();
      }
      reset() {
        this.value = this.initialValue;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      deactivate() {
        if (this.value === false)
          return this.bell();
        this.value = false;
        this.render();
      }
      activate() {
        if (this.value === true)
          return this.bell();
        this.value = true;
        this.render();
      }
      delete() {
        this.deactivate();
      }
      left() {
        this.deactivate();
      }
      right() {
        this.activate();
      }
      down() {
        this.deactivate();
      }
      up() {
        this.activate();
      }
      next() {
        this.value = !this.value;
        this.fire();
        this.render();
      }
      _(c, key) {
        if (c === " ") {
          this.value = !this.value;
        } else if (c === "1") {
          this.value = true;
        } else if (c === "0") {
          this.value = false;
        } else
          return this.bell();
        this.render();
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        else
          this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          this.value ? this.inactive : color.cyan().underline(this.inactive),
          color.gray("/"),
          this.value ? color.cyan().underline(this.active) : this.active
        ].join(" ");
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = TogglePrompt;
  }
});

// node_modules/prompts/lib/dateparts/datepart.js
var require_datepart = __commonJS({
  "node_modules/prompts/lib/dateparts/datepart.js"(exports, module2) {
    "use strict";
    var DatePart = class _DatePart {
      constructor({ token, date, parts, locales }) {
        this.token = token;
        this.date = date || /* @__PURE__ */ new Date();
        this.parts = parts || [this];
        this.locales = locales || {};
      }
      up() {
      }
      down() {
      }
      next() {
        const currentIdx = this.parts.indexOf(this);
        return this.parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
      }
      setTo(val) {
      }
      prev() {
        let parts = [].concat(this.parts).reverse();
        const currentIdx = parts.indexOf(this);
        return parts.find((part, idx) => idx > currentIdx && part instanceof _DatePart);
      }
      toString() {
        return String(this.date);
      }
    };
    module2.exports = DatePart;
  }
});

// node_modules/prompts/lib/dateparts/meridiem.js
var require_meridiem = __commonJS({
  "node_modules/prompts/lib/dateparts/meridiem.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Meridiem = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setHours((this.date.getHours() + 12) % 24);
      }
      down() {
        this.up();
      }
      toString() {
        let meridiem = this.date.getHours() > 12 ? "pm" : "am";
        return /\A/.test(this.token) ? meridiem.toUpperCase() : meridiem;
      }
    };
    module2.exports = Meridiem;
  }
});

// node_modules/prompts/lib/dateparts/day.js
var require_day = __commonJS({
  "node_modules/prompts/lib/dateparts/day.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var pos = (n) => {
      n = n % 10;
      return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
    };
    var Day = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setDate(this.date.getDate() + 1);
      }
      down() {
        this.date.setDate(this.date.getDate() - 1);
      }
      setTo(val) {
        this.date.setDate(parseInt(val.substr(-2)));
      }
      toString() {
        let date = this.date.getDate();
        let day = this.date.getDay();
        return this.token === "DD" ? String(date).padStart(2, "0") : this.token === "Do" ? date + pos(date) : this.token === "d" ? day + 1 : this.token === "ddd" ? this.locales.weekdaysShort[day] : this.token === "dddd" ? this.locales.weekdays[day] : date;
      }
    };
    module2.exports = Day;
  }
});

// node_modules/prompts/lib/dateparts/hours.js
var require_hours = __commonJS({
  "node_modules/prompts/lib/dateparts/hours.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Hours = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setHours(this.date.getHours() + 1);
      }
      down() {
        this.date.setHours(this.date.getHours() - 1);
      }
      setTo(val) {
        this.date.setHours(parseInt(val.substr(-2)));
      }
      toString() {
        let hours = this.date.getHours();
        if (/h/.test(this.token))
          hours = hours % 12 || 12;
        return this.token.length > 1 ? String(hours).padStart(2, "0") : hours;
      }
    };
    module2.exports = Hours;
  }
});

// node_modules/prompts/lib/dateparts/milliseconds.js
var require_milliseconds = __commonJS({
  "node_modules/prompts/lib/dateparts/milliseconds.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Milliseconds = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMilliseconds(this.date.getMilliseconds() + 1);
      }
      down() {
        this.date.setMilliseconds(this.date.getMilliseconds() - 1);
      }
      setTo(val) {
        this.date.setMilliseconds(parseInt(val.substr(-this.token.length)));
      }
      toString() {
        return String(this.date.getMilliseconds()).padStart(4, "0").substr(0, this.token.length);
      }
    };
    module2.exports = Milliseconds;
  }
});

// node_modules/prompts/lib/dateparts/minutes.js
var require_minutes = __commonJS({
  "node_modules/prompts/lib/dateparts/minutes.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Minutes = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMinutes(this.date.getMinutes() + 1);
      }
      down() {
        this.date.setMinutes(this.date.getMinutes() - 1);
      }
      setTo(val) {
        this.date.setMinutes(parseInt(val.substr(-2)));
      }
      toString() {
        let m = this.date.getMinutes();
        return this.token.length > 1 ? String(m).padStart(2, "0") : m;
      }
    };
    module2.exports = Minutes;
  }
});

// node_modules/prompts/lib/dateparts/month.js
var require_month = __commonJS({
  "node_modules/prompts/lib/dateparts/month.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Month = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setMonth(this.date.getMonth() + 1);
      }
      down() {
        this.date.setMonth(this.date.getMonth() - 1);
      }
      setTo(val) {
        val = parseInt(val.substr(-2)) - 1;
        this.date.setMonth(val < 0 ? 0 : val);
      }
      toString() {
        let month = this.date.getMonth();
        let tl = this.token.length;
        return tl === 2 ? String(month + 1).padStart(2, "0") : tl === 3 ? this.locales.monthsShort[month] : tl === 4 ? this.locales.months[month] : String(month + 1);
      }
    };
    module2.exports = Month;
  }
});

// node_modules/prompts/lib/dateparts/seconds.js
var require_seconds = __commonJS({
  "node_modules/prompts/lib/dateparts/seconds.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Seconds = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setSeconds(this.date.getSeconds() + 1);
      }
      down() {
        this.date.setSeconds(this.date.getSeconds() - 1);
      }
      setTo(val) {
        this.date.setSeconds(parseInt(val.substr(-2)));
      }
      toString() {
        let s = this.date.getSeconds();
        return this.token.length > 1 ? String(s).padStart(2, "0") : s;
      }
    };
    module2.exports = Seconds;
  }
});

// node_modules/prompts/lib/dateparts/year.js
var require_year = __commonJS({
  "node_modules/prompts/lib/dateparts/year.js"(exports, module2) {
    "use strict";
    var DatePart = require_datepart();
    var Year = class extends DatePart {
      constructor(opts = {}) {
        super(opts);
      }
      up() {
        this.date.setFullYear(this.date.getFullYear() + 1);
      }
      down() {
        this.date.setFullYear(this.date.getFullYear() - 1);
      }
      setTo(val) {
        this.date.setFullYear(val.substr(-4));
      }
      toString() {
        let year = String(this.date.getFullYear()).padStart(4, "0");
        return this.token.length === 2 ? year.substr(-2) : year;
      }
    };
    module2.exports = Year;
  }
});

// node_modules/prompts/lib/dateparts/index.js
var require_dateparts = __commonJS({
  "node_modules/prompts/lib/dateparts/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      DatePart: require_datepart(),
      Meridiem: require_meridiem(),
      Day: require_day(),
      Hours: require_hours(),
      Milliseconds: require_milliseconds(),
      Minutes: require_minutes(),
      Month: require_month(),
      Seconds: require_seconds(),
      Year: require_year()
    };
  }
});

// node_modules/prompts/lib/elements/date.js
var require_date = __commonJS({
  "node_modules/prompts/lib/elements/date.js"(exports, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt();
    var { style, clear, figures } = require_util2();
    var { erase, cursor } = require_src();
    var { DatePart, Meridiem, Day, Hours, Milliseconds, Minutes, Month, Seconds, Year } = require_dateparts();
    var regex = /\\(.)|"((?:\\["\\]|[^"])+)"|(D[Do]?|d{3,4}|d)|(M{1,4})|(YY(?:YY)?)|([aA])|([Hh]{1,2})|(m{1,2})|(s{1,2})|(S{1,4})|./g;
    var regexGroups = {
      1: ({ token }) => token.replace(/\\(.)/g, "$1"),
      2: (opts) => new Day(opts),
      // Day // TODO
      3: (opts) => new Month(opts),
      // Month
      4: (opts) => new Year(opts),
      // Year
      5: (opts) => new Meridiem(opts),
      // AM/PM // TODO (special)
      6: (opts) => new Hours(opts),
      // Hours
      7: (opts) => new Minutes(opts),
      // Minutes
      8: (opts) => new Seconds(opts),
      // Seconds
      9: (opts) => new Milliseconds(opts)
      // Fractional seconds
    };
    var dfltLocales = {
      months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
      monthsShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
      weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
      weekdaysShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",")
    };
    var DatePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.cursor = 0;
        this.typed = "";
        this.locales = Object.assign(dfltLocales, opts.locales);
        this._date = opts.initial || /* @__PURE__ */ new Date();
        this.errorMsg = opts.error || "Please Enter A Valid Value";
        this.validator = opts.validate || (() => true);
        this.mask = opts.mask || "YYYY-MM-DD HH:mm:ss";
        this.clear = clear("", this.out.columns);
        this.render();
      }
      get value() {
        return this.date;
      }
      get date() {
        return this._date;
      }
      set date(date) {
        if (date)
          this._date.setTime(date.getTime());
      }
      set mask(mask) {
        let result;
        this.parts = [];
        while (result = regex.exec(mask)) {
          let match = result.shift();
          let idx = result.findIndex((gr) => gr != null);
          this.parts.push(idx in regexGroups ? regexGroups[idx]({ token: result[idx] || match, date: this.date, parts: this.parts, locales: this.locales }) : result[idx] || match);
        }
        let parts = this.parts.reduce((arr, i) => {
          if (typeof i === "string" && typeof arr[arr.length - 1] === "string")
            arr[arr.length - 1] += i;
          else
            arr.push(i);
          return arr;
        }, []);
        this.parts.splice(0);
        this.parts.push(...parts);
        this.reset();
      }
      moveCursor(n) {
        this.typed = "";
        this.cursor = n;
        this.fire();
      }
      reset() {
        this.moveCursor(this.parts.findIndex((p) => p instanceof DatePart));
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.error = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      async validate() {
        let valid = await this.validator(this.value);
        if (typeof valid === "string") {
          this.errorMsg = valid;
          valid = false;
        }
        this.error = !valid;
      }
      async submit() {
        await this.validate();
        if (this.error) {
          this.color = "red";
          this.fire();
          this.render();
          return;
        }
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      up() {
        this.typed = "";
        this.parts[this.cursor].up();
        this.render();
      }
      down() {
        this.typed = "";
        this.parts[this.cursor].down();
        this.render();
      }
      left() {
        let prev = this.parts[this.cursor].prev();
        if (prev == null)
          return this.bell();
        this.moveCursor(this.parts.indexOf(prev));
        this.render();
      }
      right() {
        let next = this.parts[this.cursor].next();
        if (next == null)
          return this.bell();
        this.moveCursor(this.parts.indexOf(next));
        this.render();
      }
      next() {
        let next = this.parts[this.cursor].next();
        this.moveCursor(next ? this.parts.indexOf(next) : this.parts.findIndex((part) => part instanceof DatePart));
        this.render();
      }
      _(c) {
        if (/\d/.test(c)) {
          this.typed += c;
          this.parts[this.cursor].setTo(this.typed);
          this.render();
        }
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        else
          this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.parts.reduce((arr, p, idx) => arr.concat(idx === this.cursor && !this.done ? color.cyan().underline(p.toString()) : p), []).join("")
        ].join(" ");
        if (this.error) {
          this.outputText += this.errorMsg.split("\n").reduce(
            (a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`,
            ``
          );
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = DatePrompt;
  }
});

// node_modules/prompts/lib/elements/number.js
var require_number = __commonJS({
  "node_modules/prompts/lib/elements/number.js"(exports, module2) {
    var color = require_kleur();
    var Prompt = require_prompt();
    var { cursor, erase } = require_src();
    var { style, figures, clear, lines } = require_util2();
    var isNumber = /[0-9]/;
    var isDef = (any) => any !== void 0;
    var round = (number, precision) => {
      let factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    };
    var NumberPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.transform = style.render(opts.style);
        this.msg = opts.message;
        this.initial = isDef(opts.initial) ? opts.initial : "";
        this.float = !!opts.float;
        this.round = opts.round || 2;
        this.inc = opts.increment || 1;
        this.min = isDef(opts.min) ? opts.min : -Infinity;
        this.max = isDef(opts.max) ? opts.max : Infinity;
        this.errorMsg = opts.error || `Please Enter A Valid Value`;
        this.validator = opts.validate || (() => true);
        this.color = `cyan`;
        this.value = ``;
        this.typed = ``;
        this.lastHit = 0;
        this.render();
      }
      set value(v) {
        if (!v && v !== 0) {
          this.placeholder = true;
          this.rendered = color.gray(this.transform.render(`${this.initial}`));
          this._value = ``;
        } else {
          this.placeholder = false;
          this.rendered = this.transform.render(`${round(v, this.round)}`);
          this._value = round(v, this.round);
        }
        this.fire();
      }
      get value() {
        return this._value;
      }
      parse(x) {
        return this.float ? parseFloat(x) : parseInt(x);
      }
      valid(c) {
        return c === `-` || c === `.` && this.float || isNumber.test(c);
      }
      reset() {
        this.typed = ``;
        this.value = ``;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        let x = this.value;
        this.value = x !== `` ? x : this.initial;
        this.done = this.aborted = true;
        this.error = false;
        this.fire();
        this.render();
        this.out.write(`
`);
        this.close();
      }
      async validate() {
        let valid = await this.validator(this.value);
        if (typeof valid === `string`) {
          this.errorMsg = valid;
          valid = false;
        }
        this.error = !valid;
      }
      async submit() {
        await this.validate();
        if (this.error) {
          this.color = `red`;
          this.fire();
          this.render();
          return;
        }
        let x = this.value;
        this.value = x !== `` ? x : this.initial;
        this.done = true;
        this.aborted = false;
        this.error = false;
        this.fire();
        this.render();
        this.out.write(`
`);
        this.close();
      }
      up() {
        this.typed = ``;
        if (this.value === "") {
          this.value = this.min - this.inc;
        }
        if (this.value >= this.max)
          return this.bell();
        this.value += this.inc;
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      down() {
        this.typed = ``;
        if (this.value === "") {
          this.value = this.min + this.inc;
        }
        if (this.value <= this.min)
          return this.bell();
        this.value -= this.inc;
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      delete() {
        let val = this.value.toString();
        if (val.length === 0)
          return this.bell();
        this.value = this.parse(val = val.slice(0, -1)) || ``;
        if (this.value !== "" && this.value < this.min) {
          this.value = this.min;
        }
        this.color = `cyan`;
        this.fire();
        this.render();
      }
      next() {
        this.value = this.initial;
        this.fire();
        this.render();
      }
      _(c, key) {
        if (!this.valid(c))
          return this.bell();
        const now = Date.now();
        if (now - this.lastHit > 1e3)
          this.typed = ``;
        this.typed += c;
        this.lastHit = now;
        this.color = `cyan`;
        if (c === `.`)
          return this.fire();
        this.value = Math.min(this.parse(this.typed), this.max);
        if (this.value > this.max)
          this.value = this.max;
        if (this.value < this.min)
          this.value = this.min;
        this.fire();
        this.render();
      }
      render() {
        if (this.closed)
          return;
        if (!this.firstRender) {
          if (this.outputError)
            this.out.write(cursor.down(lines(this.outputError, this.out.columns) - 1) + clear(this.outputError, this.out.columns));
          this.out.write(clear(this.outputText, this.out.columns));
        }
        super.render();
        this.outputError = "";
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          !this.done || !this.done && !this.placeholder ? color[this.color]().underline(this.rendered) : this.rendered
        ].join(` `);
        if (this.error) {
          this.outputError += this.errorMsg.split(`
`).reduce((a, l, i) => a + `
${i ? ` ` : figures.pointerSmall} ${color.red().italic(l)}`, ``);
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText + cursor.save + this.outputError + cursor.restore);
      }
    };
    module2.exports = NumberPrompt;
  }
});

// node_modules/prompts/lib/elements/multiselect.js
var require_multiselect = __commonJS({
  "node_modules/prompts/lib/elements/multiselect.js"(exports, module2) {
    "use strict";
    var color = require_kleur();
    var { cursor } = require_src();
    var Prompt = require_prompt();
    var { clear, figures, style, wrap, entriesToDisplay } = require_util2();
    var MultiselectPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.cursor = opts.cursor || 0;
        this.scrollIndex = opts.cursor || 0;
        this.hint = opts.hint || "";
        this.warn = opts.warn || "- This option is disabled -";
        this.minSelected = opts.min;
        this.showMinError = false;
        this.maxChoices = opts.max;
        this.instructions = opts.instructions;
        this.optionsPerPage = opts.optionsPerPage || 10;
        this.value = opts.choices.map((ch, idx) => {
          if (typeof ch === "string")
            ch = { title: ch, value: idx };
          return {
            title: ch && (ch.title || ch.value || ch),
            description: ch && ch.description,
            value: ch && (ch.value === void 0 ? idx : ch.value),
            selected: ch && ch.selected,
            disabled: ch && ch.disabled
          };
        });
        this.clear = clear("", this.out.columns);
        if (!opts.overrideRender) {
          this.render();
        }
      }
      reset() {
        this.value.map((v) => !v.selected);
        this.cursor = 0;
        this.fire();
        this.render();
      }
      selected() {
        return this.value.filter((v) => v.selected);
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        const selected = this.value.filter((e) => e.selected);
        if (this.minSelected && selected.length < this.minSelected) {
          this.showMinError = true;
          this.render();
        } else {
          this.done = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
      }
      first() {
        this.cursor = 0;
        this.render();
      }
      last() {
        this.cursor = this.value.length - 1;
        this.render();
      }
      next() {
        this.cursor = (this.cursor + 1) % this.value.length;
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.cursor = this.value.length - 1;
        } else {
          this.cursor--;
        }
        this.render();
      }
      down() {
        if (this.cursor === this.value.length - 1) {
          this.cursor = 0;
        } else {
          this.cursor++;
        }
        this.render();
      }
      left() {
        this.value[this.cursor].selected = false;
        this.render();
      }
      right() {
        if (this.value.filter((e) => e.selected).length >= this.maxChoices)
          return this.bell();
        this.value[this.cursor].selected = true;
        this.render();
      }
      handleSpaceToggle() {
        const v = this.value[this.cursor];
        if (v.selected) {
          v.selected = false;
          this.render();
        } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v.selected = true;
          this.render();
        }
      }
      toggleAll() {
        if (this.maxChoices !== void 0 || this.value[this.cursor].disabled) {
          return this.bell();
        }
        const newSelected = !this.value[this.cursor].selected;
        this.value.filter((v) => !v.disabled).forEach((v) => v.selected = newSelected);
        this.render();
      }
      _(c, key) {
        if (c === " ") {
          this.handleSpaceToggle();
        } else if (c === "a") {
          this.toggleAll();
        } else {
          return this.bell();
        }
      }
      renderInstructions() {
        if (this.instructions === void 0 || this.instructions) {
          if (typeof this.instructions === "string") {
            return this.instructions;
          }
          return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
` + (this.maxChoices === void 0 ? `    a: Toggle all
` : "") + `    enter/return: Complete answer`;
        }
        return "";
      }
      renderOption(cursor2, v, i, arrowIndicator) {
        const prefix = (v.selected ? color.green(figures.radioOn) : figures.radioOff) + " " + arrowIndicator + " ";
        let title, desc;
        if (v.disabled) {
          title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
        } else {
          title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
          if (cursor2 === i && v.description) {
            desc = ` - ${v.description}`;
            if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
              desc = "\n" + wrap(v.description, { margin: prefix.length, width: this.out.columns });
            }
          }
        }
        return prefix + title + color.gray(desc || "");
      }
      // shared with autocompleteMultiselect
      paginateOptions(options) {
        if (options.length === 0) {
          return color.red("No matches for this query.");
        }
        let { startIndex, endIndex } = entriesToDisplay(this.cursor, options.length, this.optionsPerPage);
        let prefix, styledOptions = [];
        for (let i = startIndex; i < endIndex; i++) {
          if (i === startIndex && startIndex > 0) {
            prefix = figures.arrowUp;
          } else if (i === endIndex - 1 && endIndex < options.length) {
            prefix = figures.arrowDown;
          } else {
            prefix = " ";
          }
          styledOptions.push(this.renderOption(this.cursor, options[i], i, prefix));
        }
        return "\n" + styledOptions.join("\n");
      }
      // shared with autocomleteMultiselect
      renderOptions(options) {
        if (!this.done) {
          return this.paginateOptions(options);
        }
        return "";
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
        }
        const output = [color.gray(this.hint), this.renderInstructions()];
        if (this.value[this.cursor].disabled) {
          output.push(color.yellow(this.warn));
        }
        return output.join(" ");
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        super.render();
        let prompt = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.renderDoneOrInstructions()
        ].join(" ");
        if (this.showMinError) {
          prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
          this.showMinError = false;
        }
        prompt += this.renderOptions(this.value);
        this.out.write(this.clear + prompt);
        this.clear = clear(prompt, this.out.columns);
      }
    };
    module2.exports = MultiselectPrompt;
  }
});

// node_modules/prompts/lib/elements/autocomplete.js
var require_autocomplete = __commonJS({
  "node_modules/prompts/lib/elements/autocomplete.js"(exports, module2) {
    "use strict";
    var color = require_kleur();
    var Prompt = require_prompt();
    var { erase, cursor } = require_src();
    var { style, clear, figures, wrap, entriesToDisplay } = require_util2();
    var getVal = (arr, i) => arr[i] && (arr[i].value || arr[i].title || arr[i]);
    var getTitle = (arr, i) => arr[i] && (arr[i].title || arr[i].value || arr[i]);
    var getIndex = (arr, valOrTitle) => {
      const index = arr.findIndex((el) => el.value === valOrTitle || el.title === valOrTitle);
      return index > -1 ? index : void 0;
    };
    var AutocompletePrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.suggest = opts.suggest;
        this.choices = opts.choices;
        this.initial = typeof opts.initial === "number" ? opts.initial : getIndex(opts.choices, opts.initial);
        this.select = this.initial || opts.cursor || 0;
        this.i18n = { noMatches: opts.noMatches || "no matches found" };
        this.fallback = opts.fallback || this.initial;
        this.clearFirst = opts.clearFirst || false;
        this.suggestions = [];
        this.input = "";
        this.limit = opts.limit || 10;
        this.cursor = 0;
        this.transform = style.render(opts.style);
        this.scale = this.transform.scale;
        this.render = this.render.bind(this);
        this.complete = this.complete.bind(this);
        this.clear = clear("", this.out.columns);
        this.complete(this.render);
        this.render();
      }
      set fallback(fb) {
        this._fb = Number.isSafeInteger(parseInt(fb)) ? parseInt(fb) : fb;
      }
      get fallback() {
        let choice;
        if (typeof this._fb === "number")
          choice = this.choices[this._fb];
        else if (typeof this._fb === "string")
          choice = { title: this._fb };
        return choice || this._fb || { title: this.i18n.noMatches };
      }
      moveSelect(i) {
        this.select = i;
        if (this.suggestions.length > 0)
          this.value = getVal(this.suggestions, i);
        else
          this.value = this.fallback.value;
        this.fire();
      }
      async complete(cb) {
        const p = this.completing = this.suggest(this.input, this.choices);
        const suggestions = await p;
        if (this.completing !== p)
          return;
        this.suggestions = suggestions.map((s, i, arr) => ({ title: getTitle(arr, i), value: getVal(arr, i), description: s.description }));
        this.completing = false;
        const l = Math.max(suggestions.length - 1, 0);
        this.moveSelect(Math.min(l, this.select));
        cb && cb();
      }
      reset() {
        this.input = "";
        this.complete(() => {
          this.moveSelect(this.initial !== void 0 ? this.initial : 0);
          this.render();
        });
        this.render();
      }
      exit() {
        if (this.clearFirst && this.input.length > 0) {
          this.reset();
        } else {
          this.done = this.exited = true;
          this.aborted = false;
          this.fire();
          this.render();
          this.out.write("\n");
          this.close();
        }
      }
      abort() {
        this.done = this.aborted = true;
        this.exited = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.done = true;
        this.aborted = this.exited = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      _(c, key) {
        let s1 = this.input.slice(0, this.cursor);
        let s2 = this.input.slice(this.cursor);
        this.input = `${s1}${c}${s2}`;
        this.cursor = s1.length + 1;
        this.complete(this.render);
        this.render();
      }
      delete() {
        if (this.cursor === 0)
          return this.bell();
        let s1 = this.input.slice(0, this.cursor - 1);
        let s2 = this.input.slice(this.cursor);
        this.input = `${s1}${s2}`;
        this.complete(this.render);
        this.cursor = this.cursor - 1;
        this.render();
      }
      deleteForward() {
        if (this.cursor * this.scale >= this.rendered.length)
          return this.bell();
        let s1 = this.input.slice(0, this.cursor);
        let s2 = this.input.slice(this.cursor + 1);
        this.input = `${s1}${s2}`;
        this.complete(this.render);
        this.render();
      }
      first() {
        this.moveSelect(0);
        this.render();
      }
      last() {
        this.moveSelect(this.suggestions.length - 1);
        this.render();
      }
      up() {
        if (this.select === 0) {
          this.moveSelect(this.suggestions.length - 1);
        } else {
          this.moveSelect(this.select - 1);
        }
        this.render();
      }
      down() {
        if (this.select === this.suggestions.length - 1) {
          this.moveSelect(0);
        } else {
          this.moveSelect(this.select + 1);
        }
        this.render();
      }
      next() {
        if (this.select === this.suggestions.length - 1) {
          this.moveSelect(0);
        } else
          this.moveSelect(this.select + 1);
        this.render();
      }
      nextPage() {
        this.moveSelect(Math.min(this.select + this.limit, this.suggestions.length - 1));
        this.render();
      }
      prevPage() {
        this.moveSelect(Math.max(this.select - this.limit, 0));
        this.render();
      }
      left() {
        if (this.cursor <= 0)
          return this.bell();
        this.cursor = this.cursor - 1;
        this.render();
      }
      right() {
        if (this.cursor * this.scale >= this.rendered.length)
          return this.bell();
        this.cursor = this.cursor + 1;
        this.render();
      }
      renderOption(v, hovered, isStart, isEnd) {
        let desc;
        let prefix = isStart ? figures.arrowUp : isEnd ? figures.arrowDown : " ";
        let title = hovered ? color.cyan().underline(v.title) : v.title;
        prefix = (hovered ? color.cyan(figures.pointer) + " " : "  ") + prefix;
        if (v.description) {
          desc = ` - ${v.description}`;
          if (prefix.length + title.length + desc.length >= this.out.columns || v.description.split(/\r?\n/).length > 1) {
            desc = "\n" + wrap(v.description, { margin: 3, width: this.out.columns });
          }
        }
        return prefix + " " + title + color.gray(desc || "");
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        else
          this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        let { startIndex, endIndex } = entriesToDisplay(this.select, this.choices.length, this.limit);
        this.outputText = [
          style.symbol(this.done, this.aborted, this.exited),
          color.bold(this.msg),
          style.delimiter(this.completing),
          this.done && this.suggestions[this.select] ? this.suggestions[this.select].title : this.rendered = this.transform.render(this.input)
        ].join(" ");
        if (!this.done) {
          const suggestions = this.suggestions.slice(startIndex, endIndex).map((item, i) => this.renderOption(
            item,
            this.select === i + startIndex,
            i === 0 && startIndex > 0,
            i + startIndex === endIndex - 1 && endIndex < this.choices.length
          )).join("\n");
          this.outputText += `
` + (suggestions || color.gray(this.fallback.title));
        }
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = AutocompletePrompt;
  }
});

// node_modules/prompts/lib/elements/autocompleteMultiselect.js
var require_autocompleteMultiselect = __commonJS({
  "node_modules/prompts/lib/elements/autocompleteMultiselect.js"(exports, module2) {
    "use strict";
    var color = require_kleur();
    var { cursor } = require_src();
    var MultiselectPrompt = require_multiselect();
    var { clear, style, figures } = require_util2();
    var AutocompleteMultiselectPrompt = class extends MultiselectPrompt {
      constructor(opts = {}) {
        opts.overrideRender = true;
        super(opts);
        this.inputValue = "";
        this.clear = clear("", this.out.columns);
        this.filteredOptions = this.value;
        this.render();
      }
      last() {
        this.cursor = this.filteredOptions.length - 1;
        this.render();
      }
      next() {
        this.cursor = (this.cursor + 1) % this.filteredOptions.length;
        this.render();
      }
      up() {
        if (this.cursor === 0) {
          this.cursor = this.filteredOptions.length - 1;
        } else {
          this.cursor--;
        }
        this.render();
      }
      down() {
        if (this.cursor === this.filteredOptions.length - 1) {
          this.cursor = 0;
        } else {
          this.cursor++;
        }
        this.render();
      }
      left() {
        this.filteredOptions[this.cursor].selected = false;
        this.render();
      }
      right() {
        if (this.value.filter((e) => e.selected).length >= this.maxChoices)
          return this.bell();
        this.filteredOptions[this.cursor].selected = true;
        this.render();
      }
      delete() {
        if (this.inputValue.length) {
          this.inputValue = this.inputValue.substr(0, this.inputValue.length - 1);
          this.updateFilteredOptions();
        }
      }
      updateFilteredOptions() {
        const currentHighlight = this.filteredOptions[this.cursor];
        this.filteredOptions = this.value.filter((v) => {
          if (this.inputValue) {
            if (typeof v.title === "string") {
              if (v.title.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            if (typeof v.value === "string") {
              if (v.value.toLowerCase().includes(this.inputValue.toLowerCase())) {
                return true;
              }
            }
            return false;
          }
          return true;
        });
        const newHighlightIndex = this.filteredOptions.findIndex((v) => v === currentHighlight);
        this.cursor = newHighlightIndex < 0 ? 0 : newHighlightIndex;
        this.render();
      }
      handleSpaceToggle() {
        const v = this.filteredOptions[this.cursor];
        if (v.selected) {
          v.selected = false;
          this.render();
        } else if (v.disabled || this.value.filter((e) => e.selected).length >= this.maxChoices) {
          return this.bell();
        } else {
          v.selected = true;
          this.render();
        }
      }
      handleInputChange(c) {
        this.inputValue = this.inputValue + c;
        this.updateFilteredOptions();
      }
      _(c, key) {
        if (c === " ") {
          this.handleSpaceToggle();
        } else {
          this.handleInputChange(c);
        }
      }
      renderInstructions() {
        if (this.instructions === void 0 || this.instructions) {
          if (typeof this.instructions === "string") {
            return this.instructions;
          }
          return `
Instructions:
    ${figures.arrowUp}/${figures.arrowDown}: Highlight option
    ${figures.arrowLeft}/${figures.arrowRight}/[space]: Toggle selection
    [a,b,c]/delete: Filter choices
    enter/return: Complete answer
`;
        }
        return "";
      }
      renderCurrentInput() {
        return `
Filtered results for: ${this.inputValue ? this.inputValue : color.gray("Enter something to filter")}
`;
      }
      renderOption(cursor2, v, i) {
        let title;
        if (v.disabled)
          title = cursor2 === i ? color.gray().underline(v.title) : color.strikethrough().gray(v.title);
        else
          title = cursor2 === i ? color.cyan().underline(v.title) : v.title;
        return (v.selected ? color.green(figures.radioOn) : figures.radioOff) + "  " + title;
      }
      renderDoneOrInstructions() {
        if (this.done) {
          return this.value.filter((e) => e.selected).map((v) => v.title).join(", ");
        }
        const output = [color.gray(this.hint), this.renderInstructions(), this.renderCurrentInput()];
        if (this.filteredOptions.length && this.filteredOptions[this.cursor].disabled) {
          output.push(color.yellow(this.warn));
        }
        return output.join(" ");
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        super.render();
        let prompt = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(false),
          this.renderDoneOrInstructions()
        ].join(" ");
        if (this.showMinError) {
          prompt += color.red(`You must select a minimum of ${this.minSelected} choices.`);
          this.showMinError = false;
        }
        prompt += this.renderOptions(this.filteredOptions);
        this.out.write(this.clear + prompt);
        this.clear = clear(prompt, this.out.columns);
      }
    };
    module2.exports = AutocompleteMultiselectPrompt;
  }
});

// node_modules/prompts/lib/elements/confirm.js
var require_confirm = __commonJS({
  "node_modules/prompts/lib/elements/confirm.js"(exports, module2) {
    var color = require_kleur();
    var Prompt = require_prompt();
    var { style, clear } = require_util2();
    var { erase, cursor } = require_src();
    var ConfirmPrompt = class extends Prompt {
      constructor(opts = {}) {
        super(opts);
        this.msg = opts.message;
        this.value = opts.initial;
        this.initialValue = !!opts.initial;
        this.yesMsg = opts.yes || "yes";
        this.yesOption = opts.yesOption || "(Y/n)";
        this.noMsg = opts.no || "no";
        this.noOption = opts.noOption || "(y/N)";
        this.render();
      }
      reset() {
        this.value = this.initialValue;
        this.fire();
        this.render();
      }
      exit() {
        this.abort();
      }
      abort() {
        this.done = this.aborted = true;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      submit() {
        this.value = this.value || false;
        this.done = true;
        this.aborted = false;
        this.fire();
        this.render();
        this.out.write("\n");
        this.close();
      }
      _(c, key) {
        if (c.toLowerCase() === "y") {
          this.value = true;
          return this.submit();
        }
        if (c.toLowerCase() === "n") {
          this.value = false;
          return this.submit();
        }
        return this.bell();
      }
      render() {
        if (this.closed)
          return;
        if (this.firstRender)
          this.out.write(cursor.hide);
        else
          this.out.write(clear(this.outputText, this.out.columns));
        super.render();
        this.outputText = [
          style.symbol(this.done, this.aborted),
          color.bold(this.msg),
          style.delimiter(this.done),
          this.done ? this.value ? this.yesMsg : this.noMsg : color.gray(this.initialValue ? this.yesOption : this.noOption)
        ].join(" ");
        this.out.write(erase.line + cursor.to(0) + this.outputText);
      }
    };
    module2.exports = ConfirmPrompt;
  }
});

// node_modules/prompts/lib/elements/index.js
var require_elements = __commonJS({
  "node_modules/prompts/lib/elements/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      TextPrompt: require_text(),
      SelectPrompt: require_select(),
      TogglePrompt: require_toggle(),
      DatePrompt: require_date(),
      NumberPrompt: require_number(),
      MultiselectPrompt: require_multiselect(),
      AutocompletePrompt: require_autocomplete(),
      AutocompleteMultiselectPrompt: require_autocompleteMultiselect(),
      ConfirmPrompt: require_confirm()
    };
  }
});

// node_modules/prompts/lib/prompts.js
var require_prompts = __commonJS({
  "node_modules/prompts/lib/prompts.js"(exports) {
    "use strict";
    var $ = exports;
    var el = require_elements();
    var noop = (v) => v;
    function toPrompt(type, args, opts = {}) {
      return new Promise((res, rej) => {
        const p = new el[type](args);
        const onAbort = opts.onAbort || noop;
        const onSubmit = opts.onSubmit || noop;
        const onExit = opts.onExit || noop;
        p.on("state", args.onState || noop);
        p.on("submit", (x) => res(onSubmit(x)));
        p.on("exit", (x) => res(onExit(x)));
        p.on("abort", (x) => rej(onAbort(x)));
      });
    }
    $.text = (args) => toPrompt("TextPrompt", args);
    $.password = (args) => {
      args.style = "password";
      return $.text(args);
    };
    $.invisible = (args) => {
      args.style = "invisible";
      return $.text(args);
    };
    $.number = (args) => toPrompt("NumberPrompt", args);
    $.date = (args) => toPrompt("DatePrompt", args);
    $.confirm = (args) => toPrompt("ConfirmPrompt", args);
    $.list = (args) => {
      const sep = args.separator || ",";
      return toPrompt("TextPrompt", args, {
        onSubmit: (str) => str.split(sep).map((s) => s.trim())
      });
    };
    $.toggle = (args) => toPrompt("TogglePrompt", args);
    $.select = (args) => toPrompt("SelectPrompt", args);
    $.multiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("MultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    $.autocompleteMultiselect = (args) => {
      args.choices = [].concat(args.choices || []);
      const toSelected = (items) => items.filter((item) => item.selected).map((item) => item.value);
      return toPrompt("AutocompleteMultiselectPrompt", args, {
        onAbort: toSelected,
        onSubmit: toSelected
      });
    };
    var byTitle = (input, choices) => Promise.resolve(
      choices.filter((item) => item.title.slice(0, input.length).toLowerCase() === input.toLowerCase())
    );
    $.autocomplete = (args) => {
      args.suggest = args.suggest || byTitle;
      args.choices = [].concat(args.choices || []);
      return toPrompt("AutocompletePrompt", args);
    };
  }
});

// node_modules/prompts/lib/index.js
var require_lib = __commonJS({
  "node_modules/prompts/lib/index.js"(exports, module2) {
    "use strict";
    var prompts2 = require_prompts();
    var passOn = ["suggest", "format", "onState", "validate", "onRender", "type"];
    var noop = () => {
    };
    async function prompt(questions = [], { onSubmit = noop, onCancel = noop } = {}) {
      const answers = {};
      const override2 = prompt._override || {};
      questions = [].concat(questions);
      let answer, question, quit, name, type, lastPrompt;
      const getFormattedAnswer = async (question2, answer2, skipValidation = false) => {
        if (!skipValidation && question2.validate && question2.validate(answer2) !== true) {
          return;
        }
        return question2.format ? await question2.format(answer2, answers) : answer2;
      };
      for (question of questions) {
        ({ name, type } = question);
        if (typeof type === "function") {
          type = await type(answer, { ...answers }, question);
          question["type"] = type;
        }
        if (!type)
          continue;
        for (let key in question) {
          if (passOn.includes(key))
            continue;
          let value = question[key];
          question[key] = typeof value === "function" ? await value(answer, { ...answers }, lastPrompt) : value;
        }
        lastPrompt = question;
        if (typeof question.message !== "string") {
          throw new Error("prompt message is required");
        }
        ({ name, type } = question);
        if (prompts2[type] === void 0) {
          throw new Error(`prompt type (${type}) is not defined`);
        }
        if (override2[question.name] !== void 0) {
          answer = await getFormattedAnswer(question, override2[question.name]);
          if (answer !== void 0) {
            answers[name] = answer;
            continue;
          }
        }
        try {
          answer = prompt._injected ? getInjectedAnswer(prompt._injected, question.initial) : await prompts2[type](question);
          answers[name] = answer = await getFormattedAnswer(question, answer, true);
          quit = await onSubmit(question, answer, answers);
        } catch (err) {
          quit = !await onCancel(question, answers);
        }
        if (quit)
          return answers;
      }
      return answers;
    }
    function getInjectedAnswer(injected, deafultValue) {
      const answer = injected.shift();
      if (answer instanceof Error) {
        throw answer;
      }
      return answer === void 0 ? deafultValue : answer;
    }
    function inject(answers) {
      prompt._injected = (prompt._injected || []).concat(answers);
    }
    function override(answers) {
      prompt._override = Object.assign({}, answers);
    }
    module2.exports = Object.assign(prompt, { prompt, prompts: prompts2, inject, override });
  }
});

// node_modules/nunjucks/src/lib.js
var require_lib2 = __commonJS({
  "node_modules/nunjucks/src/lib.js"(exports, module2) {
    "use strict";
    var ArrayProto = Array.prototype;
    var ObjProto = Object.prototype;
    var escapeMap = {
      "&": "&amp;",
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\\": "&#92;"
    };
    var escapeRegex = /[&"'<>\\]/g;
    var _exports = module2.exports = {};
    function hasOwnProp(obj, k) {
      return ObjProto.hasOwnProperty.call(obj, k);
    }
    _exports.hasOwnProp = hasOwnProp;
    function lookupEscape(ch) {
      return escapeMap[ch];
    }
    function _prettifyError(path6, withInternals, err) {
      if (!err.Update) {
        err = new _exports.TemplateError(err);
      }
      err.Update(path6);
      if (!withInternals) {
        var old = err;
        err = new Error(old.message);
        err.name = old.name;
      }
      return err;
    }
    _exports._prettifyError = _prettifyError;
    function TemplateError(message, lineno, colno) {
      var err;
      var cause;
      if (message instanceof Error) {
        cause = message;
        message = cause.name + ": " + cause.message;
      }
      if (Object.setPrototypeOf) {
        err = new Error(message);
        Object.setPrototypeOf(err, TemplateError.prototype);
      } else {
        err = this;
        Object.defineProperty(err, "message", {
          enumerable: false,
          writable: true,
          value: message
        });
      }
      Object.defineProperty(err, "name", {
        value: "Template render error"
      });
      if (Error.captureStackTrace) {
        Error.captureStackTrace(err, this.constructor);
      }
      var getStack;
      if (cause) {
        var stackDescriptor = Object.getOwnPropertyDescriptor(cause, "stack");
        getStack = stackDescriptor && (stackDescriptor.get || function() {
          return stackDescriptor.value;
        });
        if (!getStack) {
          getStack = function getStack2() {
            return cause.stack;
          };
        }
      } else {
        var stack = new Error(message).stack;
        getStack = function getStack2() {
          return stack;
        };
      }
      Object.defineProperty(err, "stack", {
        get: function get() {
          return getStack.call(err);
        }
      });
      Object.defineProperty(err, "cause", {
        value: cause
      });
      err.lineno = lineno;
      err.colno = colno;
      err.firstUpdate = true;
      err.Update = function Update(path6) {
        var msg = "(" + (path6 || "unknown path") + ")";
        if (this.firstUpdate) {
          if (this.lineno && this.colno) {
            msg += " [Line " + this.lineno + ", Column " + this.colno + "]";
          } else if (this.lineno) {
            msg += " [Line " + this.lineno + "]";
          }
        }
        msg += "\n ";
        if (this.firstUpdate) {
          msg += " ";
        }
        this.message = msg + (this.message || "");
        this.firstUpdate = false;
        return this;
      };
      return err;
    }
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(TemplateError.prototype, Error.prototype);
    } else {
      TemplateError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: TemplateError
        }
      });
    }
    _exports.TemplateError = TemplateError;
    function escape(val) {
      return val.replace(escapeRegex, lookupEscape);
    }
    _exports.escape = escape;
    function isFunction(obj) {
      return ObjProto.toString.call(obj) === "[object Function]";
    }
    _exports.isFunction = isFunction;
    function isArray(obj) {
      return ObjProto.toString.call(obj) === "[object Array]";
    }
    _exports.isArray = isArray;
    function isString(obj) {
      return ObjProto.toString.call(obj) === "[object String]";
    }
    _exports.isString = isString;
    function isObject2(obj) {
      return ObjProto.toString.call(obj) === "[object Object]";
    }
    _exports.isObject = isObject2;
    function _prepareAttributeParts(attr) {
      if (!attr) {
        return [];
      }
      if (typeof attr === "string") {
        return attr.split(".");
      }
      return [attr];
    }
    function getAttrGetter(attribute) {
      var parts = _prepareAttributeParts(attribute);
      return function attrGetter(item) {
        var _item = item;
        for (var i = 0; i < parts.length; i++) {
          var part = parts[i];
          if (hasOwnProp(_item, part)) {
            _item = _item[part];
          } else {
            return void 0;
          }
        }
        return _item;
      };
    }
    _exports.getAttrGetter = getAttrGetter;
    function groupBy(obj, val, throwOnUndefined) {
      var result = {};
      var iterator = isFunction(val) ? val : getAttrGetter(val);
      for (var i = 0; i < obj.length; i++) {
        var value = obj[i];
        var key = iterator(value, i);
        if (key === void 0 && throwOnUndefined === true) {
          throw new TypeError('groupby: attribute "' + val + '" resolved to undefined');
        }
        (result[key] || (result[key] = [])).push(value);
      }
      return result;
    }
    _exports.groupBy = groupBy;
    function toArray(obj) {
      return Array.prototype.slice.call(obj);
    }
    _exports.toArray = toArray;
    function without(array) {
      var result = [];
      if (!array) {
        return result;
      }
      var length = array.length;
      var contains = toArray(arguments).slice(1);
      var index = -1;
      while (++index < length) {
        if (indexOf(contains, array[index]) === -1) {
          result.push(array[index]);
        }
      }
      return result;
    }
    _exports.without = without;
    function repeat(char_, n) {
      var str = "";
      for (var i = 0; i < n; i++) {
        str += char_;
      }
      return str;
    }
    _exports.repeat = repeat;
    function each(obj, func, context) {
      if (obj == null) {
        return;
      }
      if (ArrayProto.forEach && obj.forEach === ArrayProto.forEach) {
        obj.forEach(func, context);
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          func.call(context, obj[i], i, obj);
        }
      }
    }
    _exports.each = each;
    function map(obj, func) {
      var results = [];
      if (obj == null) {
        return results;
      }
      if (ArrayProto.map && obj.map === ArrayProto.map) {
        return obj.map(func);
      }
      for (var i = 0; i < obj.length; i++) {
        results[results.length] = func(obj[i], i);
      }
      if (obj.length === +obj.length) {
        results.length = obj.length;
      }
      return results;
    }
    _exports.map = map;
    function asyncIter(arr, iter, cb) {
      var i = -1;
      function next() {
        i++;
        if (i < arr.length) {
          iter(arr[i], i, next, cb);
        } else {
          cb();
        }
      }
      next();
    }
    _exports.asyncIter = asyncIter;
    function asyncFor(obj, iter, cb) {
      var keys = keys_(obj || {});
      var len = keys.length;
      var i = -1;
      function next() {
        i++;
        var k = keys[i];
        if (i < len) {
          iter(k, obj[k], i, len, next);
        } else {
          cb();
        }
      }
      next();
    }
    _exports.asyncFor = asyncFor;
    function indexOf(arr, searchElement, fromIndex) {
      return Array.prototype.indexOf.call(arr || [], searchElement, fromIndex);
    }
    _exports.indexOf = indexOf;
    function keys_(obj) {
      var arr = [];
      for (var k in obj) {
        if (hasOwnProp(obj, k)) {
          arr.push(k);
        }
      }
      return arr;
    }
    _exports.keys = keys_;
    function _entries(obj) {
      return keys_(obj).map(function(k) {
        return [k, obj[k]];
      });
    }
    _exports._entries = _entries;
    function _values(obj) {
      return keys_(obj).map(function(k) {
        return obj[k];
      });
    }
    _exports._values = _values;
    function extend(obj1, obj2) {
      obj1 = obj1 || {};
      keys_(obj2).forEach(function(k) {
        obj1[k] = obj2[k];
      });
      return obj1;
    }
    _exports._assign = _exports.extend = extend;
    function inOperator(key, val) {
      if (isArray(val) || isString(val)) {
        return val.indexOf(key) !== -1;
      } else if (isObject2(val)) {
        return key in val;
      }
      throw new Error('Cannot use "in" operator to search for "' + key + '" in unexpected types.');
    }
    _exports.inOperator = inOperator;
  }
});

// node_modules/asap/raw.js
var require_raw = __commonJS({
  "node_modules/asap/raw.js"(exports, module2) {
    "use strict";
    var domain;
    var hasSetImmediate = typeof setImmediate === "function";
    module2.exports = rawAsap;
    function rawAsap(task) {
      if (!queue.length) {
        requestFlush();
        flushing = true;
      }
      queue[queue.length] = task;
    }
    var queue = [];
    var flushing = false;
    var index = 0;
    var capacity = 1024;
    function flush() {
      while (index < queue.length) {
        var currentIndex = index;
        index = index + 1;
        queue[currentIndex].call();
        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }
          queue.length -= index;
          index = 0;
        }
      }
      queue.length = 0;
      index = 0;
      flushing = false;
    }
    rawAsap.requestFlush = requestFlush;
    function requestFlush() {
      var parentDomain = process.domain;
      if (parentDomain) {
        if (!domain) {
          domain = require("domain");
        }
        domain.active = process.domain = null;
      }
      if (flushing && hasSetImmediate) {
        setImmediate(flush);
      } else {
        process.nextTick(flush);
      }
      if (parentDomain) {
        domain.active = process.domain = parentDomain;
      }
    }
  }
});

// node_modules/asap/asap.js
var require_asap = __commonJS({
  "node_modules/asap/asap.js"(exports, module2) {
    "use strict";
    var rawAsap = require_raw();
    var freeTasks = [];
    module2.exports = asap;
    function asap(task) {
      var rawTask;
      if (freeTasks.length) {
        rawTask = freeTasks.pop();
      } else {
        rawTask = new RawTask();
      }
      rawTask.task = task;
      rawTask.domain = process.domain;
      rawAsap(rawTask);
    }
    function RawTask() {
      this.task = null;
      this.domain = null;
    }
    RawTask.prototype.call = function() {
      if (this.domain) {
        this.domain.enter();
      }
      var threw = true;
      try {
        this.task.call();
        threw = false;
        if (this.domain) {
          this.domain.exit();
        }
      } finally {
        if (threw) {
          rawAsap.requestFlush();
        }
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
      }
    };
  }
});

// node_modules/a-sync-waterfall/index.js
var require_a_sync_waterfall = __commonJS({
  "node_modules/a-sync-waterfall/index.js"(exports, module2) {
    (function(globals) {
      "use strict";
      var executeSync = function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "function") {
          args[0].apply(null, args.splice(1));
        }
      };
      var executeAsync = function(fn) {
        if (typeof setImmediate === "function") {
          setImmediate(fn);
        } else if (typeof process !== "undefined" && process.nextTick) {
          process.nextTick(fn);
        } else {
          setTimeout(fn, 0);
        }
      };
      var makeIterator = function(tasks) {
        var makeCallback = function(index) {
          var fn = function() {
            if (tasks.length) {
              tasks[index].apply(null, arguments);
            }
            return fn.next();
          };
          fn.next = function() {
            return index < tasks.length - 1 ? makeCallback(index + 1) : null;
          };
          return fn;
        };
        return makeCallback(0);
      };
      var _isArray = Array.isArray || function(maybeArray) {
        return Object.prototype.toString.call(maybeArray) === "[object Array]";
      };
      var waterfall = function(tasks, callback, forceAsync) {
        var nextTick = forceAsync ? executeAsync : executeSync;
        callback = callback || function() {
        };
        if (!_isArray(tasks)) {
          var err = new Error("First argument to waterfall must be an array of functions");
          return callback(err);
        }
        if (!tasks.length) {
          return callback();
        }
        var wrapIterator = function(iterator) {
          return function(err2) {
            if (err2) {
              callback.apply(null, arguments);
              callback = function() {
              };
            } else {
              var args = Array.prototype.slice.call(arguments, 1);
              var next = iterator.next();
              if (next) {
                args.push(wrapIterator(next));
              } else {
                args.push(callback);
              }
              nextTick(function() {
                iterator.apply(null, args);
              });
            }
          };
        };
        wrapIterator(makeIterator(tasks))();
      };
      if (typeof define !== "undefined" && define.amd) {
        define([], function() {
          return waterfall;
        });
      } else if (typeof module2 !== "undefined" && module2.exports) {
        module2.exports = waterfall;
      } else {
        globals.waterfall = waterfall;
      }
    })(exports);
  }
});

// node_modules/nunjucks/src/lexer.js
var require_lexer = __commonJS({
  "node_modules/nunjucks/src/lexer.js"(exports, module2) {
    "use strict";
    var lib = require_lib2();
    var whitespaceChars = " \n	\r\xA0";
    var delimChars = "()[]{}%*-+~/#,:|.<>=!";
    var intChars = "0123456789";
    var BLOCK_START = "{%";
    var BLOCK_END = "%}";
    var VARIABLE_START = "{{";
    var VARIABLE_END = "}}";
    var COMMENT_START = "{#";
    var COMMENT_END = "#}";
    var TOKEN_STRING = "string";
    var TOKEN_WHITESPACE = "whitespace";
    var TOKEN_DATA = "data";
    var TOKEN_BLOCK_START = "block-start";
    var TOKEN_BLOCK_END = "block-end";
    var TOKEN_VARIABLE_START = "variable-start";
    var TOKEN_VARIABLE_END = "variable-end";
    var TOKEN_COMMENT = "comment";
    var TOKEN_LEFT_PAREN = "left-paren";
    var TOKEN_RIGHT_PAREN = "right-paren";
    var TOKEN_LEFT_BRACKET = "left-bracket";
    var TOKEN_RIGHT_BRACKET = "right-bracket";
    var TOKEN_LEFT_CURLY = "left-curly";
    var TOKEN_RIGHT_CURLY = "right-curly";
    var TOKEN_OPERATOR = "operator";
    var TOKEN_COMMA = "comma";
    var TOKEN_COLON = "colon";
    var TOKEN_TILDE = "tilde";
    var TOKEN_PIPE = "pipe";
    var TOKEN_INT = "int";
    var TOKEN_FLOAT = "float";
    var TOKEN_BOOLEAN = "boolean";
    var TOKEN_NONE = "none";
    var TOKEN_SYMBOL = "symbol";
    var TOKEN_SPECIAL = "special";
    var TOKEN_REGEX = "regex";
    function token(type, value, lineno, colno) {
      return {
        type,
        value,
        lineno,
        colno
      };
    }
    var Tokenizer = /* @__PURE__ */ function() {
      function Tokenizer2(str, opts) {
        this.str = str;
        this.index = 0;
        this.len = str.length;
        this.lineno = 0;
        this.colno = 0;
        this.in_code = false;
        opts = opts || {};
        var tags = opts.tags || {};
        this.tags = {
          BLOCK_START: tags.blockStart || BLOCK_START,
          BLOCK_END: tags.blockEnd || BLOCK_END,
          VARIABLE_START: tags.variableStart || VARIABLE_START,
          VARIABLE_END: tags.variableEnd || VARIABLE_END,
          COMMENT_START: tags.commentStart || COMMENT_START,
          COMMENT_END: tags.commentEnd || COMMENT_END
        };
        this.trimBlocks = !!opts.trimBlocks;
        this.lstripBlocks = !!opts.lstripBlocks;
      }
      var _proto = Tokenizer2.prototype;
      _proto.nextToken = function nextToken() {
        var lineno = this.lineno;
        var colno = this.colno;
        var tok;
        if (this.in_code) {
          var cur = this.current();
          if (this.isFinished()) {
            return null;
          } else if (cur === '"' || cur === "'") {
            return token(TOKEN_STRING, this._parseString(cur), lineno, colno);
          } else if (tok = this._extract(whitespaceChars)) {
            return token(TOKEN_WHITESPACE, tok, lineno, colno);
          } else if ((tok = this._extractString(this.tags.BLOCK_END)) || (tok = this._extractString("-" + this.tags.BLOCK_END))) {
            this.in_code = false;
            if (this.trimBlocks) {
              cur = this.current();
              if (cur === "\n") {
                this.forward();
              } else if (cur === "\r") {
                this.forward();
                cur = this.current();
                if (cur === "\n") {
                  this.forward();
                } else {
                  this.back();
                }
              }
            }
            return token(TOKEN_BLOCK_END, tok, lineno, colno);
          } else if ((tok = this._extractString(this.tags.VARIABLE_END)) || (tok = this._extractString("-" + this.tags.VARIABLE_END))) {
            this.in_code = false;
            return token(TOKEN_VARIABLE_END, tok, lineno, colno);
          } else if (cur === "r" && this.str.charAt(this.index + 1) === "/") {
            this.forwardN(2);
            var regexBody = "";
            while (!this.isFinished()) {
              if (this.current() === "/" && this.previous() !== "\\") {
                this.forward();
                break;
              } else {
                regexBody += this.current();
                this.forward();
              }
            }
            var POSSIBLE_FLAGS = ["g", "i", "m", "y"];
            var regexFlags = "";
            while (!this.isFinished()) {
              var isCurrentAFlag = POSSIBLE_FLAGS.indexOf(this.current()) !== -1;
              if (isCurrentAFlag) {
                regexFlags += this.current();
                this.forward();
              } else {
                break;
              }
            }
            return token(TOKEN_REGEX, {
              body: regexBody,
              flags: regexFlags
            }, lineno, colno);
          } else if (delimChars.indexOf(cur) !== -1) {
            this.forward();
            var complexOps = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"];
            var curComplex = cur + this.current();
            var type;
            if (lib.indexOf(complexOps, curComplex) !== -1) {
              this.forward();
              cur = curComplex;
              if (lib.indexOf(complexOps, curComplex + this.current()) !== -1) {
                cur = curComplex + this.current();
                this.forward();
              }
            }
            switch (cur) {
              case "(":
                type = TOKEN_LEFT_PAREN;
                break;
              case ")":
                type = TOKEN_RIGHT_PAREN;
                break;
              case "[":
                type = TOKEN_LEFT_BRACKET;
                break;
              case "]":
                type = TOKEN_RIGHT_BRACKET;
                break;
              case "{":
                type = TOKEN_LEFT_CURLY;
                break;
              case "}":
                type = TOKEN_RIGHT_CURLY;
                break;
              case ",":
                type = TOKEN_COMMA;
                break;
              case ":":
                type = TOKEN_COLON;
                break;
              case "~":
                type = TOKEN_TILDE;
                break;
              case "|":
                type = TOKEN_PIPE;
                break;
              default:
                type = TOKEN_OPERATOR;
            }
            return token(type, cur, lineno, colno);
          } else {
            tok = this._extractUntil(whitespaceChars + delimChars);
            if (tok.match(/^[-+]?[0-9]+$/)) {
              if (this.current() === ".") {
                this.forward();
                var dec = this._extract(intChars);
                return token(TOKEN_FLOAT, tok + "." + dec, lineno, colno);
              } else {
                return token(TOKEN_INT, tok, lineno, colno);
              }
            } else if (tok.match(/^(true|false)$/)) {
              return token(TOKEN_BOOLEAN, tok, lineno, colno);
            } else if (tok === "none") {
              return token(TOKEN_NONE, tok, lineno, colno);
            } else if (tok === "null") {
              return token(TOKEN_NONE, tok, lineno, colno);
            } else if (tok) {
              return token(TOKEN_SYMBOL, tok, lineno, colno);
            } else {
              throw new Error("Unexpected value while parsing: " + tok);
            }
          }
        } else {
          var beginChars = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
          if (this.isFinished()) {
            return null;
          } else if ((tok = this._extractString(this.tags.BLOCK_START + "-")) || (tok = this._extractString(this.tags.BLOCK_START))) {
            this.in_code = true;
            return token(TOKEN_BLOCK_START, tok, lineno, colno);
          } else if ((tok = this._extractString(this.tags.VARIABLE_START + "-")) || (tok = this._extractString(this.tags.VARIABLE_START))) {
            this.in_code = true;
            return token(TOKEN_VARIABLE_START, tok, lineno, colno);
          } else {
            tok = "";
            var data;
            var inComment = false;
            if (this._matches(this.tags.COMMENT_START)) {
              inComment = true;
              tok = this._extractString(this.tags.COMMENT_START);
            }
            while ((data = this._extractUntil(beginChars)) !== null) {
              tok += data;
              if ((this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !inComment) {
                if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= tok.length) {
                  var lastLine = tok.slice(-this.colno);
                  if (/^\s+$/.test(lastLine)) {
                    tok = tok.slice(0, -this.colno);
                    if (!tok.length) {
                      return this.nextToken();
                    }
                  }
                }
                break;
              } else if (this._matches(this.tags.COMMENT_END)) {
                if (!inComment) {
                  throw new Error("unexpected end of comment");
                }
                tok += this._extractString(this.tags.COMMENT_END);
                break;
              } else {
                tok += this.current();
                this.forward();
              }
            }
            if (data === null && inComment) {
              throw new Error("expected end of comment, got end of file");
            }
            return token(inComment ? TOKEN_COMMENT : TOKEN_DATA, tok, lineno, colno);
          }
        }
      };
      _proto._parseString = function _parseString(delimiter) {
        this.forward();
        var str = "";
        while (!this.isFinished() && this.current() !== delimiter) {
          var cur = this.current();
          if (cur === "\\") {
            this.forward();
            switch (this.current()) {
              case "n":
                str += "\n";
                break;
              case "t":
                str += "	";
                break;
              case "r":
                str += "\r";
                break;
              default:
                str += this.current();
            }
            this.forward();
          } else {
            str += cur;
            this.forward();
          }
        }
        this.forward();
        return str;
      };
      _proto._matches = function _matches(str) {
        if (this.index + str.length > this.len) {
          return null;
        }
        var m = this.str.slice(this.index, this.index + str.length);
        return m === str;
      };
      _proto._extractString = function _extractString(str) {
        if (this._matches(str)) {
          this.forwardN(str.length);
          return str;
        }
        return null;
      };
      _proto._extractUntil = function _extractUntil(charString) {
        return this._extractMatching(true, charString || "");
      };
      _proto._extract = function _extract(charString) {
        return this._extractMatching(false, charString);
      };
      _proto._extractMatching = function _extractMatching(breakOnMatch, charString) {
        if (this.isFinished()) {
          return null;
        }
        var first = charString.indexOf(this.current());
        if (breakOnMatch && first === -1 || !breakOnMatch && first !== -1) {
          var t = this.current();
          this.forward();
          var idx = charString.indexOf(this.current());
          while ((breakOnMatch && idx === -1 || !breakOnMatch && idx !== -1) && !this.isFinished()) {
            t += this.current();
            this.forward();
            idx = charString.indexOf(this.current());
          }
          return t;
        }
        return "";
      };
      _proto._extractRegex = function _extractRegex(regex) {
        var matches = this.currentStr().match(regex);
        if (!matches) {
          return null;
        }
        this.forwardN(matches[0].length);
        return matches;
      };
      _proto.isFinished = function isFinished() {
        return this.index >= this.len;
      };
      _proto.forwardN = function forwardN(n) {
        for (var i = 0; i < n; i++) {
          this.forward();
        }
      };
      _proto.forward = function forward() {
        this.index++;
        if (this.previous() === "\n") {
          this.lineno++;
          this.colno = 0;
        } else {
          this.colno++;
        }
      };
      _proto.backN = function backN(n) {
        for (var i = 0; i < n; i++) {
          this.back();
        }
      };
      _proto.back = function back() {
        this.index--;
        if (this.current() === "\n") {
          this.lineno--;
          var idx = this.src.lastIndexOf("\n", this.index - 1);
          if (idx === -1) {
            this.colno = this.index;
          } else {
            this.colno = this.index - idx;
          }
        } else {
          this.colno--;
        }
      };
      _proto.current = function current() {
        if (!this.isFinished()) {
          return this.str.charAt(this.index);
        }
        return "";
      };
      _proto.currentStr = function currentStr() {
        if (!this.isFinished()) {
          return this.str.substr(this.index);
        }
        return "";
      };
      _proto.previous = function previous() {
        return this.str.charAt(this.index - 1);
      };
      return Tokenizer2;
    }();
    module2.exports = {
      lex: function lex(src, opts) {
        return new Tokenizer(src, opts);
      },
      TOKEN_STRING,
      TOKEN_WHITESPACE,
      TOKEN_DATA,
      TOKEN_BLOCK_START,
      TOKEN_BLOCK_END,
      TOKEN_VARIABLE_START,
      TOKEN_VARIABLE_END,
      TOKEN_COMMENT,
      TOKEN_LEFT_PAREN,
      TOKEN_RIGHT_PAREN,
      TOKEN_LEFT_BRACKET,
      TOKEN_RIGHT_BRACKET,
      TOKEN_LEFT_CURLY,
      TOKEN_RIGHT_CURLY,
      TOKEN_OPERATOR,
      TOKEN_COMMA,
      TOKEN_COLON,
      TOKEN_TILDE,
      TOKEN_PIPE,
      TOKEN_INT,
      TOKEN_FLOAT,
      TOKEN_BOOLEAN,
      TOKEN_NONE,
      TOKEN_SYMBOL,
      TOKEN_SPECIAL,
      TOKEN_REGEX
    };
  }
});

// node_modules/nunjucks/src/object.js
var require_object = __commonJS({
  "node_modules/nunjucks/src/object.js"(exports, module2) {
    "use strict";
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var EventEmitter = require("events");
    var lib = require_lib2();
    function parentWrap(parent, prop) {
      if (typeof parent !== "function" || typeof prop !== "function") {
        return prop;
      }
      return function wrap() {
        var tmp = this.parent;
        this.parent = parent;
        var res = prop.apply(this, arguments);
        this.parent = tmp;
        return res;
      };
    }
    function extendClass(cls, name, props) {
      props = props || {};
      lib.keys(props).forEach(function(k) {
        props[k] = parentWrap(cls.prototype[k], props[k]);
      });
      var subclass = /* @__PURE__ */ function(_cls) {
        _inheritsLoose(subclass2, _cls);
        function subclass2() {
          return _cls.apply(this, arguments) || this;
        }
        _createClass(subclass2, [{
          key: "typename",
          get: function get() {
            return name;
          }
        }]);
        return subclass2;
      }(cls);
      lib._assign(subclass.prototype, props);
      return subclass;
    }
    var Obj = /* @__PURE__ */ function() {
      function Obj2() {
        this.init.apply(this, arguments);
      }
      var _proto = Obj2.prototype;
      _proto.init = function init2() {
      };
      Obj2.extend = function extend(name, props) {
        if (typeof name === "object") {
          props = name;
          name = "anonymous";
        }
        return extendClass(this, name, props);
      };
      _createClass(Obj2, [{
        key: "typename",
        get: function get() {
          return this.constructor.name;
        }
      }]);
      return Obj2;
    }();
    var EmitterObj = /* @__PURE__ */ function(_EventEmitter) {
      _inheritsLoose(EmitterObj2, _EventEmitter);
      function EmitterObj2() {
        var _this2;
        var _this;
        _this = _EventEmitter.call(this) || this;
        (_this2 = _this).init.apply(_this2, arguments);
        return _this;
      }
      var _proto2 = EmitterObj2.prototype;
      _proto2.init = function init2() {
      };
      EmitterObj2.extend = function extend(name, props) {
        if (typeof name === "object") {
          props = name;
          name = "anonymous";
        }
        return extendClass(this, name, props);
      };
      _createClass(EmitterObj2, [{
        key: "typename",
        get: function get() {
          return this.constructor.name;
        }
      }]);
      return EmitterObj2;
    }(EventEmitter);
    module2.exports = {
      Obj,
      EmitterObj
    };
  }
});

// node_modules/nunjucks/src/nodes.js
var require_nodes = __commonJS({
  "node_modules/nunjucks/src/nodes.js"(exports, module2) {
    "use strict";
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require_object();
    var Obj = _require.Obj;
    function traverseAndCheck(obj, type, results) {
      if (obj instanceof type) {
        results.push(obj);
      }
      if (obj instanceof Node) {
        obj.findAll(type, results);
      }
    }
    var Node = /* @__PURE__ */ function(_Obj) {
      _inheritsLoose(Node2, _Obj);
      function Node2() {
        return _Obj.apply(this, arguments) || this;
      }
      var _proto = Node2.prototype;
      _proto.init = function init2(lineno, colno) {
        var _arguments = arguments, _this = this;
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        this.lineno = lineno;
        this.colno = colno;
        this.fields.forEach(function(field, i) {
          var val = _arguments[i + 2];
          if (val === void 0) {
            val = null;
          }
          _this[field] = val;
        });
      };
      _proto.findAll = function findAll(type, results) {
        var _this2 = this;
        results = results || [];
        if (this instanceof NodeList) {
          this.children.forEach(function(child) {
            return traverseAndCheck(child, type, results);
          });
        } else {
          this.fields.forEach(function(field) {
            return traverseAndCheck(_this2[field], type, results);
          });
        }
        return results;
      };
      _proto.iterFields = function iterFields(func) {
        var _this3 = this;
        this.fields.forEach(function(field) {
          func(_this3[field], field);
        });
      };
      return Node2;
    }(Obj);
    var Value = /* @__PURE__ */ function(_Node) {
      _inheritsLoose(Value2, _Node);
      function Value2() {
        return _Node.apply(this, arguments) || this;
      }
      _createClass(Value2, [{
        key: "typename",
        get: function get() {
          return "Value";
        }
      }, {
        key: "fields",
        get: function get() {
          return ["value"];
        }
      }]);
      return Value2;
    }(Node);
    var NodeList = /* @__PURE__ */ function(_Node2) {
      _inheritsLoose(NodeList2, _Node2);
      function NodeList2() {
        return _Node2.apply(this, arguments) || this;
      }
      var _proto2 = NodeList2.prototype;
      _proto2.init = function init2(lineno, colno, nodes) {
        _Node2.prototype.init.call(this, lineno, colno, nodes || []);
      };
      _proto2.addChild = function addChild(node) {
        this.children.push(node);
      };
      _createClass(NodeList2, [{
        key: "typename",
        get: function get() {
          return "NodeList";
        }
      }, {
        key: "fields",
        get: function get() {
          return ["children"];
        }
      }]);
      return NodeList2;
    }(Node);
    var Root = NodeList.extend("Root");
    var Literal = Value.extend("Literal");
    var _Symbol = Value.extend("Symbol");
    var Group = NodeList.extend("Group");
    var ArrayNode = NodeList.extend("Array");
    var Pair = Node.extend("Pair", {
      fields: ["key", "value"]
    });
    var Dict = NodeList.extend("Dict");
    var LookupVal = Node.extend("LookupVal", {
      fields: ["target", "val"]
    });
    var If = Node.extend("If", {
      fields: ["cond", "body", "else_"]
    });
    var IfAsync = If.extend("IfAsync");
    var InlineIf = Node.extend("InlineIf", {
      fields: ["cond", "body", "else_"]
    });
    var For = Node.extend("For", {
      fields: ["arr", "name", "body", "else_"]
    });
    var AsyncEach = For.extend("AsyncEach");
    var AsyncAll = For.extend("AsyncAll");
    var Macro = Node.extend("Macro", {
      fields: ["name", "args", "body"]
    });
    var Caller = Macro.extend("Caller");
    var Import = Node.extend("Import", {
      fields: ["template", "target", "withContext"]
    });
    var FromImport = /* @__PURE__ */ function(_Node3) {
      _inheritsLoose(FromImport2, _Node3);
      function FromImport2() {
        return _Node3.apply(this, arguments) || this;
      }
      var _proto3 = FromImport2.prototype;
      _proto3.init = function init2(lineno, colno, template, names, withContext) {
        _Node3.prototype.init.call(this, lineno, colno, template, names || new NodeList(), withContext);
      };
      _createClass(FromImport2, [{
        key: "typename",
        get: function get() {
          return "FromImport";
        }
      }, {
        key: "fields",
        get: function get() {
          return ["template", "names", "withContext"];
        }
      }]);
      return FromImport2;
    }(Node);
    var FunCall = Node.extend("FunCall", {
      fields: ["name", "args"]
    });
    var Filter = FunCall.extend("Filter");
    var FilterAsync = Filter.extend("FilterAsync", {
      fields: ["name", "args", "symbol"]
    });
    var KeywordArgs = Dict.extend("KeywordArgs");
    var Block = Node.extend("Block", {
      fields: ["name", "body"]
    });
    var Super = Node.extend("Super", {
      fields: ["blockName", "symbol"]
    });
    var TemplateRef = Node.extend("TemplateRef", {
      fields: ["template"]
    });
    var Extends = TemplateRef.extend("Extends");
    var Include = Node.extend("Include", {
      fields: ["template", "ignoreMissing"]
    });
    var Set2 = Node.extend("Set", {
      fields: ["targets", "value"]
    });
    var Switch = Node.extend("Switch", {
      fields: ["expr", "cases", "default"]
    });
    var Case = Node.extend("Case", {
      fields: ["cond", "body"]
    });
    var Output = NodeList.extend("Output");
    var Capture = Node.extend("Capture", {
      fields: ["body"]
    });
    var TemplateData = Literal.extend("TemplateData");
    var UnaryOp = Node.extend("UnaryOp", {
      fields: ["target"]
    });
    var BinOp = Node.extend("BinOp", {
      fields: ["left", "right"]
    });
    var In = BinOp.extend("In");
    var Is = BinOp.extend("Is");
    var Or = BinOp.extend("Or");
    var And = BinOp.extend("And");
    var Not = UnaryOp.extend("Not");
    var Add = BinOp.extend("Add");
    var Concat = BinOp.extend("Concat");
    var Sub = BinOp.extend("Sub");
    var Mul = BinOp.extend("Mul");
    var Div = BinOp.extend("Div");
    var FloorDiv = BinOp.extend("FloorDiv");
    var Mod = BinOp.extend("Mod");
    var Pow = BinOp.extend("Pow");
    var Neg = UnaryOp.extend("Neg");
    var Pos = UnaryOp.extend("Pos");
    var Compare = Node.extend("Compare", {
      fields: ["expr", "ops"]
    });
    var CompareOperand = Node.extend("CompareOperand", {
      fields: ["expr", "type"]
    });
    var CallExtension = Node.extend("CallExtension", {
      init: function init2(ext, prop, args, contentArgs) {
        this.parent();
        this.extName = ext.__name || ext;
        this.prop = prop;
        this.args = args || new NodeList();
        this.contentArgs = contentArgs || [];
        this.autoescape = ext.autoescape;
      },
      fields: ["extName", "prop", "args", "contentArgs"]
    });
    var CallExtensionAsync = CallExtension.extend("CallExtensionAsync");
    function print(str, indent, inline) {
      var lines = str.split("\n");
      lines.forEach(function(line, i) {
        if (line && (inline && i > 0 || !inline)) {
          process.stdout.write(" ".repeat(indent));
        }
        var nl = i === lines.length - 1 ? "" : "\n";
        process.stdout.write("" + line + nl);
      });
    }
    function printNodes(node, indent) {
      indent = indent || 0;
      print(node.typename + ": ", indent);
      if (node instanceof NodeList) {
        print("\n");
        node.children.forEach(function(n) {
          printNodes(n, indent + 2);
        });
      } else if (node instanceof CallExtension) {
        print(node.extName + "." + node.prop + "\n");
        if (node.args) {
          printNodes(node.args, indent + 2);
        }
        if (node.contentArgs) {
          node.contentArgs.forEach(function(n) {
            printNodes(n, indent + 2);
          });
        }
      } else {
        var nodes = [];
        var props = null;
        node.iterFields(function(val, fieldName) {
          if (val instanceof Node) {
            nodes.push([fieldName, val]);
          } else {
            props = props || {};
            props[fieldName] = val;
          }
        });
        if (props) {
          print(JSON.stringify(props, null, 2) + "\n", null, true);
        } else {
          print("\n");
        }
        nodes.forEach(function(_ref) {
          var fieldName = _ref[0], n = _ref[1];
          print("[" + fieldName + "] =>", indent + 2);
          printNodes(n, indent + 4);
        });
      }
    }
    module2.exports = {
      Node,
      Root,
      NodeList,
      Value,
      Literal,
      Symbol: _Symbol,
      Group,
      Array: ArrayNode,
      Pair,
      Dict,
      Output,
      Capture,
      TemplateData,
      If,
      IfAsync,
      InlineIf,
      For,
      AsyncEach,
      AsyncAll,
      Macro,
      Caller,
      Import,
      FromImport,
      FunCall,
      Filter,
      FilterAsync,
      KeywordArgs,
      Block,
      Super,
      Extends,
      Include,
      Set: Set2,
      Switch,
      Case,
      LookupVal,
      BinOp,
      In,
      Is,
      Or,
      And,
      Not,
      Add,
      Concat,
      Sub,
      Mul,
      Div,
      FloorDiv,
      Mod,
      Pow,
      Neg,
      Pos,
      Compare,
      CompareOperand,
      CallExtension,
      CallExtensionAsync,
      printNodes
    };
  }
});

// node_modules/nunjucks/src/parser.js
var require_parser = __commonJS({
  "node_modules/nunjucks/src/parser.js"(exports, module2) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var lexer = require_lexer();
    var nodes = require_nodes();
    var Obj = require_object().Obj;
    var lib = require_lib2();
    var Parser = /* @__PURE__ */ function(_Obj) {
      _inheritsLoose(Parser2, _Obj);
      function Parser2() {
        return _Obj.apply(this, arguments) || this;
      }
      var _proto = Parser2.prototype;
      _proto.init = function init2(tokens) {
        this.tokens = tokens;
        this.peeked = null;
        this.breakOnBlocks = null;
        this.dropLeadingWhitespace = false;
        this.extensions = [];
      };
      _proto.nextToken = function nextToken(withWhitespace) {
        var tok;
        if (this.peeked) {
          if (!withWhitespace && this.peeked.type === lexer.TOKEN_WHITESPACE) {
            this.peeked = null;
          } else {
            tok = this.peeked;
            this.peeked = null;
            return tok;
          }
        }
        tok = this.tokens.nextToken();
        if (!withWhitespace) {
          while (tok && tok.type === lexer.TOKEN_WHITESPACE) {
            tok = this.tokens.nextToken();
          }
        }
        return tok;
      };
      _proto.peekToken = function peekToken() {
        this.peeked = this.peeked || this.nextToken();
        return this.peeked;
      };
      _proto.pushToken = function pushToken(tok) {
        if (this.peeked) {
          throw new Error("pushToken: can only push one token on between reads");
        }
        this.peeked = tok;
      };
      _proto.error = function error(msg, lineno, colno) {
        if (lineno === void 0 || colno === void 0) {
          var tok = this.peekToken() || {};
          lineno = tok.lineno;
          colno = tok.colno;
        }
        if (lineno !== void 0) {
          lineno += 1;
        }
        if (colno !== void 0) {
          colno += 1;
        }
        return new lib.TemplateError(msg, lineno, colno);
      };
      _proto.fail = function fail(msg, lineno, colno) {
        throw this.error(msg, lineno, colno);
      };
      _proto.skip = function skip(type) {
        var tok = this.nextToken();
        if (!tok || tok.type !== type) {
          this.pushToken(tok);
          return false;
        }
        return true;
      };
      _proto.expect = function expect(type) {
        var tok = this.nextToken();
        if (tok.type !== type) {
          this.fail("expected " + type + ", got " + tok.type, tok.lineno, tok.colno);
        }
        return tok;
      };
      _proto.skipValue = function skipValue(type, val) {
        var tok = this.nextToken();
        if (!tok || tok.type !== type || tok.value !== val) {
          this.pushToken(tok);
          return false;
        }
        return true;
      };
      _proto.skipSymbol = function skipSymbol(val) {
        return this.skipValue(lexer.TOKEN_SYMBOL, val);
      };
      _proto.advanceAfterBlockEnd = function advanceAfterBlockEnd(name) {
        var tok;
        if (!name) {
          tok = this.peekToken();
          if (!tok) {
            this.fail("unexpected end of file");
          }
          if (tok.type !== lexer.TOKEN_SYMBOL) {
            this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed");
          }
          name = this.nextToken().value;
        }
        tok = this.nextToken();
        if (tok && tok.type === lexer.TOKEN_BLOCK_END) {
          if (tok.value.charAt(0) === "-") {
            this.dropLeadingWhitespace = true;
          }
        } else {
          this.fail("expected block end in " + name + " statement");
        }
        return tok;
      };
      _proto.advanceAfterVariableEnd = function advanceAfterVariableEnd() {
        var tok = this.nextToken();
        if (tok && tok.type === lexer.TOKEN_VARIABLE_END) {
          this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-";
        } else {
          this.pushToken(tok);
          this.fail("expected variable end");
        }
      };
      _proto.parseFor = function parseFor() {
        var forTok = this.peekToken();
        var node;
        var endBlock;
        if (this.skipSymbol("for")) {
          node = new nodes.For(forTok.lineno, forTok.colno);
          endBlock = "endfor";
        } else if (this.skipSymbol("asyncEach")) {
          node = new nodes.AsyncEach(forTok.lineno, forTok.colno);
          endBlock = "endeach";
        } else if (this.skipSymbol("asyncAll")) {
          node = new nodes.AsyncAll(forTok.lineno, forTok.colno);
          endBlock = "endall";
        } else {
          this.fail("parseFor: expected for{Async}", forTok.lineno, forTok.colno);
        }
        node.name = this.parsePrimary();
        if (!(node.name instanceof nodes.Symbol)) {
          this.fail("parseFor: variable name expected for loop");
        }
        var type = this.peekToken().type;
        if (type === lexer.TOKEN_COMMA) {
          var key = node.name;
          node.name = new nodes.Array(key.lineno, key.colno);
          node.name.addChild(key);
          while (this.skip(lexer.TOKEN_COMMA)) {
            var prim = this.parsePrimary();
            node.name.addChild(prim);
          }
        }
        if (!this.skipSymbol("in")) {
          this.fail('parseFor: expected "in" keyword for loop', forTok.lineno, forTok.colno);
        }
        node.arr = this.parseExpression();
        this.advanceAfterBlockEnd(forTok.value);
        node.body = this.parseUntilBlocks(endBlock, "else");
        if (this.skipSymbol("else")) {
          this.advanceAfterBlockEnd("else");
          node.else_ = this.parseUntilBlocks(endBlock);
        }
        this.advanceAfterBlockEnd();
        return node;
      };
      _proto.parseMacro = function parseMacro() {
        var macroTok = this.peekToken();
        if (!this.skipSymbol("macro")) {
          this.fail("expected macro");
        }
        var name = this.parsePrimary(true);
        var args = this.parseSignature();
        var node = new nodes.Macro(macroTok.lineno, macroTok.colno, name, args);
        this.advanceAfterBlockEnd(macroTok.value);
        node.body = this.parseUntilBlocks("endmacro");
        this.advanceAfterBlockEnd();
        return node;
      };
      _proto.parseCall = function parseCall() {
        var callTok = this.peekToken();
        if (!this.skipSymbol("call")) {
          this.fail("expected call");
        }
        var callerArgs = this.parseSignature(true) || new nodes.NodeList();
        var macroCall = this.parsePrimary();
        this.advanceAfterBlockEnd(callTok.value);
        var body = this.parseUntilBlocks("endcall");
        this.advanceAfterBlockEnd();
        var callerName = new nodes.Symbol(callTok.lineno, callTok.colno, "caller");
        var callerNode = new nodes.Caller(callTok.lineno, callTok.colno, callerName, callerArgs, body);
        var args = macroCall.args.children;
        if (!(args[args.length - 1] instanceof nodes.KeywordArgs)) {
          args.push(new nodes.KeywordArgs());
        }
        var kwargs = args[args.length - 1];
        kwargs.addChild(new nodes.Pair(callTok.lineno, callTok.colno, callerName, callerNode));
        return new nodes.Output(callTok.lineno, callTok.colno, [macroCall]);
      };
      _proto.parseWithContext = function parseWithContext() {
        var tok = this.peekToken();
        var withContext = null;
        if (this.skipSymbol("with")) {
          withContext = true;
        } else if (this.skipSymbol("without")) {
          withContext = false;
        }
        if (withContext !== null) {
          if (!this.skipSymbol("context")) {
            this.fail("parseFrom: expected context after with/without", tok.lineno, tok.colno);
          }
        }
        return withContext;
      };
      _proto.parseImport = function parseImport() {
        var importTok = this.peekToken();
        if (!this.skipSymbol("import")) {
          this.fail("parseImport: expected import", importTok.lineno, importTok.colno);
        }
        var template = this.parseExpression();
        if (!this.skipSymbol("as")) {
          this.fail('parseImport: expected "as" keyword', importTok.lineno, importTok.colno);
        }
        var target = this.parseExpression();
        var withContext = this.parseWithContext();
        var node = new nodes.Import(importTok.lineno, importTok.colno, template, target, withContext);
        this.advanceAfterBlockEnd(importTok.value);
        return node;
      };
      _proto.parseFrom = function parseFrom() {
        var fromTok = this.peekToken();
        if (!this.skipSymbol("from")) {
          this.fail("parseFrom: expected from");
        }
        var template = this.parseExpression();
        if (!this.skipSymbol("import")) {
          this.fail("parseFrom: expected import", fromTok.lineno, fromTok.colno);
        }
        var names = new nodes.NodeList();
        var withContext;
        while (1) {
          var nextTok = this.peekToken();
          if (nextTok.type === lexer.TOKEN_BLOCK_END) {
            if (!names.children.length) {
              this.fail("parseFrom: Expected at least one import name", fromTok.lineno, fromTok.colno);
            }
            if (nextTok.value.charAt(0) === "-") {
              this.dropLeadingWhitespace = true;
            }
            this.nextToken();
            break;
          }
          if (names.children.length > 0 && !this.skip(lexer.TOKEN_COMMA)) {
            this.fail("parseFrom: expected comma", fromTok.lineno, fromTok.colno);
          }
          var name = this.parsePrimary();
          if (name.value.charAt(0) === "_") {
            this.fail("parseFrom: names starting with an underscore cannot be imported", name.lineno, name.colno);
          }
          if (this.skipSymbol("as")) {
            var alias = this.parsePrimary();
            names.addChild(new nodes.Pair(name.lineno, name.colno, name, alias));
          } else {
            names.addChild(name);
          }
          withContext = this.parseWithContext();
        }
        return new nodes.FromImport(fromTok.lineno, fromTok.colno, template, names, withContext);
      };
      _proto.parseBlock = function parseBlock() {
        var tag = this.peekToken();
        if (!this.skipSymbol("block")) {
          this.fail("parseBlock: expected block", tag.lineno, tag.colno);
        }
        var node = new nodes.Block(tag.lineno, tag.colno);
        node.name = this.parsePrimary();
        if (!(node.name instanceof nodes.Symbol)) {
          this.fail("parseBlock: variable name expected", tag.lineno, tag.colno);
        }
        this.advanceAfterBlockEnd(tag.value);
        node.body = this.parseUntilBlocks("endblock");
        this.skipSymbol("endblock");
        this.skipSymbol(node.name.value);
        var tok = this.peekToken();
        if (!tok) {
          this.fail("parseBlock: expected endblock, got end of file");
        }
        this.advanceAfterBlockEnd(tok.value);
        return node;
      };
      _proto.parseExtends = function parseExtends() {
        var tagName = "extends";
        var tag = this.peekToken();
        if (!this.skipSymbol(tagName)) {
          this.fail("parseTemplateRef: expected " + tagName);
        }
        var node = new nodes.Extends(tag.lineno, tag.colno);
        node.template = this.parseExpression();
        this.advanceAfterBlockEnd(tag.value);
        return node;
      };
      _proto.parseInclude = function parseInclude() {
        var tagName = "include";
        var tag = this.peekToken();
        if (!this.skipSymbol(tagName)) {
          this.fail("parseInclude: expected " + tagName);
        }
        var node = new nodes.Include(tag.lineno, tag.colno);
        node.template = this.parseExpression();
        if (this.skipSymbol("ignore") && this.skipSymbol("missing")) {
          node.ignoreMissing = true;
        }
        this.advanceAfterBlockEnd(tag.value);
        return node;
      };
      _proto.parseIf = function parseIf() {
        var tag = this.peekToken();
        var node;
        if (this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif")) {
          node = new nodes.If(tag.lineno, tag.colno);
        } else if (this.skipSymbol("ifAsync")) {
          node = new nodes.IfAsync(tag.lineno, tag.colno);
        } else {
          this.fail("parseIf: expected if, elif, or elseif", tag.lineno, tag.colno);
        }
        node.cond = this.parseExpression();
        this.advanceAfterBlockEnd(tag.value);
        node.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
        var tok = this.peekToken();
        switch (tok && tok.value) {
          case "elseif":
          case "elif":
            node.else_ = this.parseIf();
            break;
          case "else":
            this.advanceAfterBlockEnd();
            node.else_ = this.parseUntilBlocks("endif");
            this.advanceAfterBlockEnd();
            break;
          case "endif":
            node.else_ = null;
            this.advanceAfterBlockEnd();
            break;
          default:
            this.fail("parseIf: expected elif, else, or endif, got end of file");
        }
        return node;
      };
      _proto.parseSet = function parseSet() {
        var tag = this.peekToken();
        if (!this.skipSymbol("set")) {
          this.fail("parseSet: expected set", tag.lineno, tag.colno);
        }
        var node = new nodes.Set(tag.lineno, tag.colno, []);
        var target;
        while (target = this.parsePrimary()) {
          node.targets.push(target);
          if (!this.skip(lexer.TOKEN_COMMA)) {
            break;
          }
        }
        if (!this.skipValue(lexer.TOKEN_OPERATOR, "=")) {
          if (!this.skip(lexer.TOKEN_BLOCK_END)) {
            this.fail("parseSet: expected = or block end in set tag", tag.lineno, tag.colno);
          } else {
            node.body = new nodes.Capture(tag.lineno, tag.colno, this.parseUntilBlocks("endset"));
            node.value = null;
            this.advanceAfterBlockEnd();
          }
        } else {
          node.value = this.parseExpression();
          this.advanceAfterBlockEnd(tag.value);
        }
        return node;
      };
      _proto.parseSwitch = function parseSwitch() {
        var switchStart = "switch";
        var switchEnd = "endswitch";
        var caseStart = "case";
        var caseDefault = "default";
        var tag = this.peekToken();
        if (!this.skipSymbol(switchStart) && !this.skipSymbol(caseStart) && !this.skipSymbol(caseDefault)) {
          this.fail('parseSwitch: expected "switch," "case" or "default"', tag.lineno, tag.colno);
        }
        var expr = this.parseExpression();
        this.advanceAfterBlockEnd(switchStart);
        this.parseUntilBlocks(caseStart, caseDefault, switchEnd);
        var tok = this.peekToken();
        var cases = [];
        var defaultCase;
        do {
          this.skipSymbol(caseStart);
          var cond = this.parseExpression();
          this.advanceAfterBlockEnd(switchStart);
          var body = this.parseUntilBlocks(caseStart, caseDefault, switchEnd);
          cases.push(new nodes.Case(tok.line, tok.col, cond, body));
          tok = this.peekToken();
        } while (tok && tok.value === caseStart);
        switch (tok.value) {
          case caseDefault:
            this.advanceAfterBlockEnd();
            defaultCase = this.parseUntilBlocks(switchEnd);
            this.advanceAfterBlockEnd();
            break;
          case switchEnd:
            this.advanceAfterBlockEnd();
            break;
          default:
            this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
        }
        return new nodes.Switch(tag.lineno, tag.colno, expr, cases, defaultCase);
      };
      _proto.parseStatement = function parseStatement() {
        var tok = this.peekToken();
        var node;
        if (tok.type !== lexer.TOKEN_SYMBOL) {
          this.fail("tag name expected", tok.lineno, tok.colno);
        }
        if (this.breakOnBlocks && lib.indexOf(this.breakOnBlocks, tok.value) !== -1) {
          return null;
        }
        switch (tok.value) {
          case "raw":
            return this.parseRaw();
          case "verbatim":
            return this.parseRaw("verbatim");
          case "if":
          case "ifAsync":
            return this.parseIf();
          case "for":
          case "asyncEach":
          case "asyncAll":
            return this.parseFor();
          case "block":
            return this.parseBlock();
          case "extends":
            return this.parseExtends();
          case "include":
            return this.parseInclude();
          case "set":
            return this.parseSet();
          case "macro":
            return this.parseMacro();
          case "call":
            return this.parseCall();
          case "import":
            return this.parseImport();
          case "from":
            return this.parseFrom();
          case "filter":
            return this.parseFilterStatement();
          case "switch":
            return this.parseSwitch();
          default:
            if (this.extensions.length) {
              for (var i = 0; i < this.extensions.length; i++) {
                var ext = this.extensions[i];
                if (lib.indexOf(ext.tags || [], tok.value) !== -1) {
                  return ext.parse(this, nodes, lexer);
                }
              }
            }
            this.fail("unknown block tag: " + tok.value, tok.lineno, tok.colno);
        }
        return node;
      };
      _proto.parseRaw = function parseRaw(tagName) {
        tagName = tagName || "raw";
        var endTagName = "end" + tagName;
        var rawBlockRegex = new RegExp("([\\s\\S]*?){%\\s*(" + tagName + "|" + endTagName + ")\\s*(?=%})%}");
        var rawLevel = 1;
        var str = "";
        var matches = null;
        var begun = this.advanceAfterBlockEnd();
        while ((matches = this.tokens._extractRegex(rawBlockRegex)) && rawLevel > 0) {
          var all = matches[0];
          var pre = matches[1];
          var blockName = matches[2];
          if (blockName === tagName) {
            rawLevel += 1;
          } else if (blockName === endTagName) {
            rawLevel -= 1;
          }
          if (rawLevel === 0) {
            str += pre;
            this.tokens.backN(all.length - pre.length);
          } else {
            str += all;
          }
        }
        return new nodes.Output(begun.lineno, begun.colno, [new nodes.TemplateData(begun.lineno, begun.colno, str)]);
      };
      _proto.parsePostfix = function parsePostfix(node) {
        var lookup;
        var tok = this.peekToken();
        while (tok) {
          if (tok.type === lexer.TOKEN_LEFT_PAREN) {
            node = new nodes.FunCall(tok.lineno, tok.colno, node, this.parseSignature());
          } else if (tok.type === lexer.TOKEN_LEFT_BRACKET) {
            lookup = this.parseAggregate();
            if (lookup.children.length > 1) {
              this.fail("invalid index");
            }
            node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup.children[0]);
          } else if (tok.type === lexer.TOKEN_OPERATOR && tok.value === ".") {
            this.nextToken();
            var val = this.nextToken();
            if (val.type !== lexer.TOKEN_SYMBOL) {
              this.fail("expected name as lookup value, got " + val.value, val.lineno, val.colno);
            }
            lookup = new nodes.Literal(val.lineno, val.colno, val.value);
            node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup);
          } else {
            break;
          }
          tok = this.peekToken();
        }
        return node;
      };
      _proto.parseExpression = function parseExpression() {
        var node = this.parseInlineIf();
        return node;
      };
      _proto.parseInlineIf = function parseInlineIf() {
        var node = this.parseOr();
        if (this.skipSymbol("if")) {
          var condNode = this.parseOr();
          var bodyNode = node;
          node = new nodes.InlineIf(node.lineno, node.colno);
          node.body = bodyNode;
          node.cond = condNode;
          if (this.skipSymbol("else")) {
            node.else_ = this.parseOr();
          } else {
            node.else_ = null;
          }
        }
        return node;
      };
      _proto.parseOr = function parseOr() {
        var node = this.parseAnd();
        while (this.skipSymbol("or")) {
          var node2 = this.parseAnd();
          node = new nodes.Or(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseAnd = function parseAnd() {
        var node = this.parseNot();
        while (this.skipSymbol("and")) {
          var node2 = this.parseNot();
          node = new nodes.And(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseNot = function parseNot() {
        var tok = this.peekToken();
        if (this.skipSymbol("not")) {
          return new nodes.Not(tok.lineno, tok.colno, this.parseNot());
        }
        return this.parseIn();
      };
      _proto.parseIn = function parseIn() {
        var node = this.parseIs();
        while (1) {
          var tok = this.nextToken();
          if (!tok) {
            break;
          }
          var invert = tok.type === lexer.TOKEN_SYMBOL && tok.value === "not";
          if (!invert) {
            this.pushToken(tok);
          }
          if (this.skipSymbol("in")) {
            var node2 = this.parseIs();
            node = new nodes.In(node.lineno, node.colno, node, node2);
            if (invert) {
              node = new nodes.Not(node.lineno, node.colno, node);
            }
          } else {
            if (invert) {
              this.pushToken(tok);
            }
            break;
          }
        }
        return node;
      };
      _proto.parseIs = function parseIs() {
        var node = this.parseCompare();
        if (this.skipSymbol("is")) {
          var not = this.skipSymbol("not");
          var node2 = this.parseCompare();
          node = new nodes.Is(node.lineno, node.colno, node, node2);
          if (not) {
            node = new nodes.Not(node.lineno, node.colno, node);
          }
        }
        return node;
      };
      _proto.parseCompare = function parseCompare() {
        var compareOps = ["==", "===", "!=", "!==", "<", ">", "<=", ">="];
        var expr = this.parseConcat();
        var ops = [];
        while (1) {
          var tok = this.nextToken();
          if (!tok) {
            break;
          } else if (compareOps.indexOf(tok.value) !== -1) {
            ops.push(new nodes.CompareOperand(tok.lineno, tok.colno, this.parseConcat(), tok.value));
          } else {
            this.pushToken(tok);
            break;
          }
        }
        if (ops.length) {
          return new nodes.Compare(ops[0].lineno, ops[0].colno, expr, ops);
        } else {
          return expr;
        }
      };
      _proto.parseConcat = function parseConcat() {
        var node = this.parseAdd();
        while (this.skipValue(lexer.TOKEN_TILDE, "~")) {
          var node2 = this.parseAdd();
          node = new nodes.Concat(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseAdd = function parseAdd() {
        var node = this.parseSub();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "+")) {
          var node2 = this.parseSub();
          node = new nodes.Add(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseSub = function parseSub() {
        var node = this.parseMul();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "-")) {
          var node2 = this.parseMul();
          node = new nodes.Sub(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseMul = function parseMul() {
        var node = this.parseDiv();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "*")) {
          var node2 = this.parseDiv();
          node = new nodes.Mul(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseDiv = function parseDiv() {
        var node = this.parseFloorDiv();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "/")) {
          var node2 = this.parseFloorDiv();
          node = new nodes.Div(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseFloorDiv = function parseFloorDiv() {
        var node = this.parseMod();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "//")) {
          var node2 = this.parseMod();
          node = new nodes.FloorDiv(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseMod = function parseMod() {
        var node = this.parsePow();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "%")) {
          var node2 = this.parsePow();
          node = new nodes.Mod(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parsePow = function parsePow() {
        var node = this.parseUnary();
        while (this.skipValue(lexer.TOKEN_OPERATOR, "**")) {
          var node2 = this.parseUnary();
          node = new nodes.Pow(node.lineno, node.colno, node, node2);
        }
        return node;
      };
      _proto.parseUnary = function parseUnary(noFilters) {
        var tok = this.peekToken();
        var node;
        if (this.skipValue(lexer.TOKEN_OPERATOR, "-")) {
          node = new nodes.Neg(tok.lineno, tok.colno, this.parseUnary(true));
        } else if (this.skipValue(lexer.TOKEN_OPERATOR, "+")) {
          node = new nodes.Pos(tok.lineno, tok.colno, this.parseUnary(true));
        } else {
          node = this.parsePrimary();
        }
        if (!noFilters) {
          node = this.parseFilter(node);
        }
        return node;
      };
      _proto.parsePrimary = function parsePrimary(noPostfix) {
        var tok = this.nextToken();
        var val;
        var node = null;
        if (!tok) {
          this.fail("expected expression, got end of file");
        } else if (tok.type === lexer.TOKEN_STRING) {
          val = tok.value;
        } else if (tok.type === lexer.TOKEN_INT) {
          val = parseInt(tok.value, 10);
        } else if (tok.type === lexer.TOKEN_FLOAT) {
          val = parseFloat(tok.value);
        } else if (tok.type === lexer.TOKEN_BOOLEAN) {
          if (tok.value === "true") {
            val = true;
          } else if (tok.value === "false") {
            val = false;
          } else {
            this.fail("invalid boolean: " + tok.value, tok.lineno, tok.colno);
          }
        } else if (tok.type === lexer.TOKEN_NONE) {
          val = null;
        } else if (tok.type === lexer.TOKEN_REGEX) {
          val = new RegExp(tok.value.body, tok.value.flags);
        }
        if (val !== void 0) {
          node = new nodes.Literal(tok.lineno, tok.colno, val);
        } else if (tok.type === lexer.TOKEN_SYMBOL) {
          node = new nodes.Symbol(tok.lineno, tok.colno, tok.value);
        } else {
          this.pushToken(tok);
          node = this.parseAggregate();
        }
        if (!noPostfix) {
          node = this.parsePostfix(node);
        }
        if (node) {
          return node;
        } else {
          throw this.error("unexpected token: " + tok.value, tok.lineno, tok.colno);
        }
      };
      _proto.parseFilterName = function parseFilterName() {
        var tok = this.expect(lexer.TOKEN_SYMBOL);
        var name = tok.value;
        while (this.skipValue(lexer.TOKEN_OPERATOR, ".")) {
          name += "." + this.expect(lexer.TOKEN_SYMBOL).value;
        }
        return new nodes.Symbol(tok.lineno, tok.colno, name);
      };
      _proto.parseFilterArgs = function parseFilterArgs(node) {
        if (this.peekToken().type === lexer.TOKEN_LEFT_PAREN) {
          var call = this.parsePostfix(node);
          return call.args.children;
        }
        return [];
      };
      _proto.parseFilter = function parseFilter(node) {
        while (this.skip(lexer.TOKEN_PIPE)) {
          var name = this.parseFilterName();
          node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [node].concat(this.parseFilterArgs(node))));
        }
        return node;
      };
      _proto.parseFilterStatement = function parseFilterStatement() {
        var filterTok = this.peekToken();
        if (!this.skipSymbol("filter")) {
          this.fail("parseFilterStatement: expected filter");
        }
        var name = this.parseFilterName();
        var args = this.parseFilterArgs(name);
        this.advanceAfterBlockEnd(filterTok.value);
        var body = new nodes.Capture(name.lineno, name.colno, this.parseUntilBlocks("endfilter"));
        this.advanceAfterBlockEnd();
        var node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [body].concat(args)));
        return new nodes.Output(name.lineno, name.colno, [node]);
      };
      _proto.parseAggregate = function parseAggregate() {
        var tok = this.nextToken();
        var node;
        switch (tok.type) {
          case lexer.TOKEN_LEFT_PAREN:
            node = new nodes.Group(tok.lineno, tok.colno);
            break;
          case lexer.TOKEN_LEFT_BRACKET:
            node = new nodes.Array(tok.lineno, tok.colno);
            break;
          case lexer.TOKEN_LEFT_CURLY:
            node = new nodes.Dict(tok.lineno, tok.colno);
            break;
          default:
            return null;
        }
        while (1) {
          var type = this.peekToken().type;
          if (type === lexer.TOKEN_RIGHT_PAREN || type === lexer.TOKEN_RIGHT_BRACKET || type === lexer.TOKEN_RIGHT_CURLY) {
            this.nextToken();
            break;
          }
          if (node.children.length > 0) {
            if (!this.skip(lexer.TOKEN_COMMA)) {
              this.fail("parseAggregate: expected comma after expression", tok.lineno, tok.colno);
            }
          }
          if (node instanceof nodes.Dict) {
            var key = this.parsePrimary();
            if (!this.skip(lexer.TOKEN_COLON)) {
              this.fail("parseAggregate: expected colon after dict key", tok.lineno, tok.colno);
            }
            var value = this.parseExpression();
            node.addChild(new nodes.Pair(key.lineno, key.colno, key, value));
          } else {
            var expr = this.parseExpression();
            node.addChild(expr);
          }
        }
        return node;
      };
      _proto.parseSignature = function parseSignature(tolerant, noParens) {
        var tok = this.peekToken();
        if (!noParens && tok.type !== lexer.TOKEN_LEFT_PAREN) {
          if (tolerant) {
            return null;
          } else {
            this.fail("expected arguments", tok.lineno, tok.colno);
          }
        }
        if (tok.type === lexer.TOKEN_LEFT_PAREN) {
          tok = this.nextToken();
        }
        var args = new nodes.NodeList(tok.lineno, tok.colno);
        var kwargs = new nodes.KeywordArgs(tok.lineno, tok.colno);
        var checkComma = false;
        while (1) {
          tok = this.peekToken();
          if (!noParens && tok.type === lexer.TOKEN_RIGHT_PAREN) {
            this.nextToken();
            break;
          } else if (noParens && tok.type === lexer.TOKEN_BLOCK_END) {
            break;
          }
          if (checkComma && !this.skip(lexer.TOKEN_COMMA)) {
            this.fail("parseSignature: expected comma after expression", tok.lineno, tok.colno);
          } else {
            var arg = this.parseExpression();
            if (this.skipValue(lexer.TOKEN_OPERATOR, "=")) {
              kwargs.addChild(new nodes.Pair(arg.lineno, arg.colno, arg, this.parseExpression()));
            } else {
              args.addChild(arg);
            }
          }
          checkComma = true;
        }
        if (kwargs.children.length) {
          args.addChild(kwargs);
        }
        return args;
      };
      _proto.parseUntilBlocks = function parseUntilBlocks() {
        var prev = this.breakOnBlocks;
        for (var _len = arguments.length, blockNames = new Array(_len), _key = 0; _key < _len; _key++) {
          blockNames[_key] = arguments[_key];
        }
        this.breakOnBlocks = blockNames;
        var ret = this.parse();
        this.breakOnBlocks = prev;
        return ret;
      };
      _proto.parseNodes = function parseNodes() {
        var tok;
        var buf = [];
        while (tok = this.nextToken()) {
          if (tok.type === lexer.TOKEN_DATA) {
            var data = tok.value;
            var nextToken = this.peekToken();
            var nextVal = nextToken && nextToken.value;
            if (this.dropLeadingWhitespace) {
              data = data.replace(/^\s*/, "");
              this.dropLeadingWhitespace = false;
            }
            if (nextToken && (nextToken.type === lexer.TOKEN_BLOCK_START && nextVal.charAt(nextVal.length - 1) === "-" || nextToken.type === lexer.TOKEN_VARIABLE_START && nextVal.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || nextToken.type === lexer.TOKEN_COMMENT && nextVal.charAt(this.tokens.tags.COMMENT_START.length) === "-")) {
              data = data.replace(/\s*$/, "");
            }
            buf.push(new nodes.Output(tok.lineno, tok.colno, [new nodes.TemplateData(tok.lineno, tok.colno, data)]));
          } else if (tok.type === lexer.TOKEN_BLOCK_START) {
            this.dropLeadingWhitespace = false;
            var n = this.parseStatement();
            if (!n) {
              break;
            }
            buf.push(n);
          } else if (tok.type === lexer.TOKEN_VARIABLE_START) {
            var e = this.parseExpression();
            this.dropLeadingWhitespace = false;
            this.advanceAfterVariableEnd();
            buf.push(new nodes.Output(tok.lineno, tok.colno, [e]));
          } else if (tok.type === lexer.TOKEN_COMMENT) {
            this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-";
          } else {
            this.fail("Unexpected token at top-level: " + tok.type, tok.lineno, tok.colno);
          }
        }
        return buf;
      };
      _proto.parse = function parse() {
        return new nodes.NodeList(0, 0, this.parseNodes());
      };
      _proto.parseAsRoot = function parseAsRoot() {
        return new nodes.Root(0, 0, this.parseNodes());
      };
      return Parser2;
    }(Obj);
    module2.exports = {
      parse: function parse(src, extensions, opts) {
        var p = new Parser(lexer.lex(src, opts));
        if (extensions !== void 0) {
          p.extensions = extensions;
        }
        return p.parseAsRoot();
      },
      Parser
    };
  }
});

// node_modules/nunjucks/src/transformer.js
var require_transformer = __commonJS({
  "node_modules/nunjucks/src/transformer.js"(exports, module2) {
    "use strict";
    var nodes = require_nodes();
    var lib = require_lib2();
    var sym = 0;
    function gensym() {
      return "hole_" + sym++;
    }
    function mapCOW(arr, func) {
      var res = null;
      for (var i = 0; i < arr.length; i++) {
        var item = func(arr[i]);
        if (item !== arr[i]) {
          if (!res) {
            res = arr.slice();
          }
          res[i] = item;
        }
      }
      return res || arr;
    }
    function walk(ast, func, depthFirst) {
      if (!(ast instanceof nodes.Node)) {
        return ast;
      }
      if (!depthFirst) {
        var astT = func(ast);
        if (astT && astT !== ast) {
          return astT;
        }
      }
      if (ast instanceof nodes.NodeList) {
        var children = mapCOW(ast.children, function(node) {
          return walk(node, func, depthFirst);
        });
        if (children !== ast.children) {
          ast = new nodes[ast.typename](ast.lineno, ast.colno, children);
        }
      } else if (ast instanceof nodes.CallExtension) {
        var args = walk(ast.args, func, depthFirst);
        var contentArgs = mapCOW(ast.contentArgs, function(node) {
          return walk(node, func, depthFirst);
        });
        if (args !== ast.args || contentArgs !== ast.contentArgs) {
          ast = new nodes[ast.typename](ast.extName, ast.prop, args, contentArgs);
        }
      } else {
        var props = ast.fields.map(function(field) {
          return ast[field];
        });
        var propsT = mapCOW(props, function(prop) {
          return walk(prop, func, depthFirst);
        });
        if (propsT !== props) {
          ast = new nodes[ast.typename](ast.lineno, ast.colno);
          propsT.forEach(function(prop, i) {
            ast[ast.fields[i]] = prop;
          });
        }
      }
      return depthFirst ? func(ast) || ast : ast;
    }
    function depthWalk(ast, func) {
      return walk(ast, func, true);
    }
    function _liftFilters(node, asyncFilters, prop) {
      var children = [];
      var walked = depthWalk(prop ? node[prop] : node, function(descNode) {
        var symbol;
        if (descNode instanceof nodes.Block) {
          return descNode;
        } else if (descNode instanceof nodes.Filter && lib.indexOf(asyncFilters, descNode.name.value) !== -1 || descNode instanceof nodes.CallExtensionAsync) {
          symbol = new nodes.Symbol(descNode.lineno, descNode.colno, gensym());
          children.push(new nodes.FilterAsync(descNode.lineno, descNode.colno, descNode.name, descNode.args, symbol));
        }
        return symbol;
      });
      if (prop) {
        node[prop] = walked;
      } else {
        node = walked;
      }
      if (children.length) {
        children.push(node);
        return new nodes.NodeList(node.lineno, node.colno, children);
      } else {
        return node;
      }
    }
    function liftFilters(ast, asyncFilters) {
      return depthWalk(ast, function(node) {
        if (node instanceof nodes.Output) {
          return _liftFilters(node, asyncFilters);
        } else if (node instanceof nodes.Set) {
          return _liftFilters(node, asyncFilters, "value");
        } else if (node instanceof nodes.For) {
          return _liftFilters(node, asyncFilters, "arr");
        } else if (node instanceof nodes.If) {
          return _liftFilters(node, asyncFilters, "cond");
        } else if (node instanceof nodes.CallExtension) {
          return _liftFilters(node, asyncFilters, "args");
        } else {
          return void 0;
        }
      });
    }
    function liftSuper(ast) {
      return walk(ast, function(blockNode) {
        if (!(blockNode instanceof nodes.Block)) {
          return;
        }
        var hasSuper = false;
        var symbol = gensym();
        blockNode.body = walk(blockNode.body, function(node) {
          if (node instanceof nodes.FunCall && node.name.value === "super") {
            hasSuper = true;
            return new nodes.Symbol(node.lineno, node.colno, symbol);
          }
        });
        if (hasSuper) {
          blockNode.body.children.unshift(new nodes.Super(0, 0, blockNode.name, new nodes.Symbol(0, 0, symbol)));
        }
      });
    }
    function convertStatements(ast) {
      return depthWalk(ast, function(node) {
        if (!(node instanceof nodes.If) && !(node instanceof nodes.For)) {
          return void 0;
        }
        var async = false;
        walk(node, function(child) {
          if (child instanceof nodes.FilterAsync || child instanceof nodes.IfAsync || child instanceof nodes.AsyncEach || child instanceof nodes.AsyncAll || child instanceof nodes.CallExtensionAsync) {
            async = true;
            return child;
          }
          return void 0;
        });
        if (async) {
          if (node instanceof nodes.If) {
            return new nodes.IfAsync(node.lineno, node.colno, node.cond, node.body, node.else_);
          } else if (node instanceof nodes.For && !(node instanceof nodes.AsyncAll)) {
            return new nodes.AsyncEach(node.lineno, node.colno, node.arr, node.name, node.body, node.else_);
          }
        }
        return void 0;
      });
    }
    function cps(ast, asyncFilters) {
      return convertStatements(liftSuper(liftFilters(ast, asyncFilters)));
    }
    function transform(ast, asyncFilters) {
      return cps(ast, asyncFilters || []);
    }
    module2.exports = {
      transform
    };
  }
});

// node_modules/nunjucks/src/runtime.js
var require_runtime = __commonJS({
  "node_modules/nunjucks/src/runtime.js"(exports, module2) {
    "use strict";
    var lib = require_lib2();
    var arrayFrom = Array.from;
    var supportsIterators = typeof Symbol === "function" && Symbol.iterator && typeof arrayFrom === "function";
    var Frame = /* @__PURE__ */ function() {
      function Frame2(parent, isolateWrites) {
        this.variables = /* @__PURE__ */ Object.create(null);
        this.parent = parent;
        this.topLevel = false;
        this.isolateWrites = isolateWrites;
      }
      var _proto = Frame2.prototype;
      _proto.set = function set(name, val, resolveUp) {
        var parts = name.split(".");
        var obj = this.variables;
        var frame = this;
        if (resolveUp) {
          if (frame = this.resolve(parts[0], true)) {
            frame.set(name, val);
            return;
          }
        }
        for (var i = 0; i < parts.length - 1; i++) {
          var id = parts[i];
          if (!obj[id]) {
            obj[id] = {};
          }
          obj = obj[id];
        }
        obj[parts[parts.length - 1]] = val;
      };
      _proto.get = function get(name) {
        var val = this.variables[name];
        if (val !== void 0) {
          return val;
        }
        return null;
      };
      _proto.lookup = function lookup(name) {
        var p = this.parent;
        var val = this.variables[name];
        if (val !== void 0) {
          return val;
        }
        return p && p.lookup(name);
      };
      _proto.resolve = function resolve6(name, forWrite) {
        var p = forWrite && this.isolateWrites ? void 0 : this.parent;
        var val = this.variables[name];
        if (val !== void 0) {
          return this;
        }
        return p && p.resolve(name);
      };
      _proto.push = function push(isolateWrites) {
        return new Frame2(this, isolateWrites);
      };
      _proto.pop = function pop() {
        return this.parent;
      };
      return Frame2;
    }();
    function makeMacro(argNames, kwargNames, func) {
      return function macro() {
        for (var _len = arguments.length, macroArgs = new Array(_len), _key = 0; _key < _len; _key++) {
          macroArgs[_key] = arguments[_key];
        }
        var argCount = numArgs(macroArgs);
        var args;
        var kwargs = getKeywordArgs(macroArgs);
        if (argCount > argNames.length) {
          args = macroArgs.slice(0, argNames.length);
          macroArgs.slice(args.length, argCount).forEach(function(val, i2) {
            if (i2 < kwargNames.length) {
              kwargs[kwargNames[i2]] = val;
            }
          });
          args.push(kwargs);
        } else if (argCount < argNames.length) {
          args = macroArgs.slice(0, argCount);
          for (var i = argCount; i < argNames.length; i++) {
            var arg = argNames[i];
            args.push(kwargs[arg]);
            delete kwargs[arg];
          }
          args.push(kwargs);
        } else {
          args = macroArgs;
        }
        return func.apply(this, args);
      };
    }
    function makeKeywordArgs(obj) {
      obj.__keywords = true;
      return obj;
    }
    function isKeywordArgs(obj) {
      return obj && Object.prototype.hasOwnProperty.call(obj, "__keywords");
    }
    function getKeywordArgs(args) {
      var len = args.length;
      if (len) {
        var lastArg = args[len - 1];
        if (isKeywordArgs(lastArg)) {
          return lastArg;
        }
      }
      return {};
    }
    function numArgs(args) {
      var len = args.length;
      if (len === 0) {
        return 0;
      }
      var lastArg = args[len - 1];
      if (isKeywordArgs(lastArg)) {
        return len - 1;
      } else {
        return len;
      }
    }
    function SafeString(val) {
      if (typeof val !== "string") {
        return val;
      }
      this.val = val;
      this.length = val.length;
    }
    SafeString.prototype = Object.create(String.prototype, {
      length: {
        writable: true,
        configurable: true,
        value: 0
      }
    });
    SafeString.prototype.valueOf = function valueOf() {
      return this.val;
    };
    SafeString.prototype.toString = function toString() {
      return this.val;
    };
    function copySafeness(dest, target) {
      if (dest instanceof SafeString) {
        return new SafeString(target);
      }
      return target.toString();
    }
    function markSafe(val) {
      var type = typeof val;
      if (type === "string") {
        return new SafeString(val);
      } else if (type !== "function") {
        return val;
      } else {
        return function wrapSafe(args) {
          var ret = val.apply(this, arguments);
          if (typeof ret === "string") {
            return new SafeString(ret);
          }
          return ret;
        };
      }
    }
    function suppressValue(val, autoescape) {
      val = val !== void 0 && val !== null ? val : "";
      if (autoescape && !(val instanceof SafeString)) {
        val = lib.escape(val.toString());
      }
      return val;
    }
    function ensureDefined(val, lineno, colno) {
      if (val === null || val === void 0) {
        throw new lib.TemplateError("attempted to output null or undefined value", lineno + 1, colno + 1);
      }
      return val;
    }
    function memberLookup(obj, val) {
      if (obj === void 0 || obj === null) {
        return void 0;
      }
      if (typeof obj[val] === "function") {
        return function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return obj[val].apply(obj, args);
        };
      }
      return obj[val];
    }
    function callWrap(obj, name, context, args) {
      if (!obj) {
        throw new Error("Unable to call `" + name + "`, which is undefined or falsey");
      } else if (typeof obj !== "function") {
        throw new Error("Unable to call `" + name + "`, which is not a function");
      }
      return obj.apply(context, args);
    }
    function contextOrFrameLookup(context, frame, name) {
      var val = frame.lookup(name);
      return val !== void 0 ? val : context.lookup(name);
    }
    function handleError(error, lineno, colno) {
      if (error.lineno) {
        return error;
      } else {
        return new lib.TemplateError(error, lineno, colno);
      }
    }
    function asyncEach(arr, dimen, iter, cb) {
      if (lib.isArray(arr)) {
        var len = arr.length;
        lib.asyncIter(arr, function iterCallback(item, i, next) {
          switch (dimen) {
            case 1:
              iter(item, i, len, next);
              break;
            case 2:
              iter(item[0], item[1], i, len, next);
              break;
            case 3:
              iter(item[0], item[1], item[2], i, len, next);
              break;
            default:
              item.push(i, len, next);
              iter.apply(this, item);
          }
        }, cb);
      } else {
        lib.asyncFor(arr, function iterCallback(key, val, i, len2, next) {
          iter(key, val, i, len2, next);
        }, cb);
      }
    }
    function asyncAll(arr, dimen, func, cb) {
      var finished = 0;
      var len;
      var outputArr;
      function done(i2, output) {
        finished++;
        outputArr[i2] = output;
        if (finished === len) {
          cb(null, outputArr.join(""));
        }
      }
      if (lib.isArray(arr)) {
        len = arr.length;
        outputArr = new Array(len);
        if (len === 0) {
          cb(null, "");
        } else {
          for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            switch (dimen) {
              case 1:
                func(item, i, len, done);
                break;
              case 2:
                func(item[0], item[1], i, len, done);
                break;
              case 3:
                func(item[0], item[1], item[2], i, len, done);
                break;
              default:
                item.push(i, len, done);
                func.apply(this, item);
            }
          }
        }
      } else {
        var keys = lib.keys(arr || {});
        len = keys.length;
        outputArr = new Array(len);
        if (len === 0) {
          cb(null, "");
        } else {
          for (var _i = 0; _i < keys.length; _i++) {
            var k = keys[_i];
            func(k, arr[k], _i, len, done);
          }
        }
      }
    }
    function fromIterator(arr) {
      if (typeof arr !== "object" || arr === null || lib.isArray(arr)) {
        return arr;
      } else if (supportsIterators && Symbol.iterator in arr) {
        return arrayFrom(arr);
      } else {
        return arr;
      }
    }
    module2.exports = {
      Frame,
      makeMacro,
      makeKeywordArgs,
      numArgs,
      suppressValue,
      ensureDefined,
      memberLookup,
      contextOrFrameLookup,
      callWrap,
      handleError,
      isArray: lib.isArray,
      keys: lib.keys,
      SafeString,
      copySafeness,
      markSafe,
      asyncEach,
      asyncAll,
      inOperator: lib.inOperator,
      fromIterator
    };
  }
});

// node_modules/nunjucks/src/compiler.js
var require_compiler = __commonJS({
  "node_modules/nunjucks/src/compiler.js"(exports, module2) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var parser = require_parser();
    var transformer = require_transformer();
    var nodes = require_nodes();
    var _require = require_lib2();
    var TemplateError = _require.TemplateError;
    var _require2 = require_runtime();
    var Frame = _require2.Frame;
    var _require3 = require_object();
    var Obj = _require3.Obj;
    var compareOps = {
      "==": "==",
      "===": "===",
      "!=": "!=",
      "!==": "!==",
      "<": "<",
      ">": ">",
      "<=": "<=",
      ">=": ">="
    };
    var Compiler = /* @__PURE__ */ function(_Obj) {
      _inheritsLoose(Compiler2, _Obj);
      function Compiler2() {
        return _Obj.apply(this, arguments) || this;
      }
      var _proto = Compiler2.prototype;
      _proto.init = function init2(templateName, throwOnUndefined) {
        this.templateName = templateName;
        this.codebuf = [];
        this.lastId = 0;
        this.buffer = null;
        this.bufferStack = [];
        this._scopeClosers = "";
        this.inBlock = false;
        this.throwOnUndefined = throwOnUndefined;
      };
      _proto.fail = function fail(msg, lineno, colno) {
        if (lineno !== void 0) {
          lineno += 1;
        }
        if (colno !== void 0) {
          colno += 1;
        }
        throw new TemplateError(msg, lineno, colno);
      };
      _proto._pushBuffer = function _pushBuffer() {
        var id = this._tmpid();
        this.bufferStack.push(this.buffer);
        this.buffer = id;
        this._emit("var " + this.buffer + ' = "";');
        return id;
      };
      _proto._popBuffer = function _popBuffer() {
        this.buffer = this.bufferStack.pop();
      };
      _proto._emit = function _emit(code) {
        this.codebuf.push(code);
      };
      _proto._emitLine = function _emitLine(code) {
        this._emit(code + "\n");
      };
      _proto._emitLines = function _emitLines() {
        var _this = this;
        for (var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++) {
          lines[_key] = arguments[_key];
        }
        lines.forEach(function(line) {
          return _this._emitLine(line);
        });
      };
      _proto._emitFuncBegin = function _emitFuncBegin(node, name) {
        this.buffer = "output";
        this._scopeClosers = "";
        this._emitLine("function " + name + "(env, context, frame, runtime, cb) {");
        this._emitLine("var lineno = " + node.lineno + ";");
        this._emitLine("var colno = " + node.colno + ";");
        this._emitLine("var " + this.buffer + ' = "";');
        this._emitLine("try {");
      };
      _proto._emitFuncEnd = function _emitFuncEnd(noReturn) {
        if (!noReturn) {
          this._emitLine("cb(null, " + this.buffer + ");");
        }
        this._closeScopeLevels();
        this._emitLine("} catch (e) {");
        this._emitLine("  cb(runtime.handleError(e, lineno, colno));");
        this._emitLine("}");
        this._emitLine("}");
        this.buffer = null;
      };
      _proto._addScopeLevel = function _addScopeLevel() {
        this._scopeClosers += "})";
      };
      _proto._closeScopeLevels = function _closeScopeLevels() {
        this._emitLine(this._scopeClosers + ";");
        this._scopeClosers = "";
      };
      _proto._withScopedSyntax = function _withScopedSyntax(func) {
        var _scopeClosers = this._scopeClosers;
        this._scopeClosers = "";
        func.call(this);
        this._closeScopeLevels();
        this._scopeClosers = _scopeClosers;
      };
      _proto._makeCallback = function _makeCallback(res) {
        var err = this._tmpid();
        return "function(" + err + (res ? "," + res : "") + ") {\nif(" + err + ") { cb(" + err + "); return; }";
      };
      _proto._tmpid = function _tmpid() {
        this.lastId++;
        return "t_" + this.lastId;
      };
      _proto._templateName = function _templateName() {
        return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
      };
      _proto._compileChildren = function _compileChildren(node, frame) {
        var _this2 = this;
        node.children.forEach(function(child) {
          _this2.compile(child, frame);
        });
      };
      _proto._compileAggregate = function _compileAggregate(node, frame, startChar, endChar) {
        var _this3 = this;
        if (startChar) {
          this._emit(startChar);
        }
        node.children.forEach(function(child, i) {
          if (i > 0) {
            _this3._emit(",");
          }
          _this3.compile(child, frame);
        });
        if (endChar) {
          this._emit(endChar);
        }
      };
      _proto._compileExpression = function _compileExpression(node, frame) {
        this.assertType(node, nodes.Literal, nodes.Symbol, nodes.Group, nodes.Array, nodes.Dict, nodes.FunCall, nodes.Caller, nodes.Filter, nodes.LookupVal, nodes.Compare, nodes.InlineIf, nodes.In, nodes.Is, nodes.And, nodes.Or, nodes.Not, nodes.Add, nodes.Concat, nodes.Sub, nodes.Mul, nodes.Div, nodes.FloorDiv, nodes.Mod, nodes.Pow, nodes.Neg, nodes.Pos, nodes.Compare, nodes.NodeList);
        this.compile(node, frame);
      };
      _proto.assertType = function assertType(node) {
        for (var _len2 = arguments.length, types = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          types[_key2 - 1] = arguments[_key2];
        }
        if (!types.some(function(t) {
          return node instanceof t;
        })) {
          this.fail("assertType: invalid type: " + node.typename, node.lineno, node.colno);
        }
      };
      _proto.compileCallExtension = function compileCallExtension(node, frame, async) {
        var _this4 = this;
        var args = node.args;
        var contentArgs = node.contentArgs;
        var autoescape = typeof node.autoescape === "boolean" ? node.autoescape : true;
        if (!async) {
          this._emit(this.buffer + " += runtime.suppressValue(");
        }
        this._emit('env.getExtension("' + node.extName + '")["' + node.prop + '"](');
        this._emit("context");
        if (args || contentArgs) {
          this._emit(",");
        }
        if (args) {
          if (!(args instanceof nodes.NodeList)) {
            this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`");
          }
          args.children.forEach(function(arg, i) {
            _this4._compileExpression(arg, frame);
            if (i !== args.children.length - 1 || contentArgs.length) {
              _this4._emit(",");
            }
          });
        }
        if (contentArgs.length) {
          contentArgs.forEach(function(arg, i) {
            if (i > 0) {
              _this4._emit(",");
            }
            if (arg) {
              _this4._emitLine("function(cb) {");
              _this4._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
              var id = _this4._pushBuffer();
              _this4._withScopedSyntax(function() {
                _this4.compile(arg, frame);
                _this4._emitLine("cb(null, " + id + ");");
              });
              _this4._popBuffer();
              _this4._emitLine("return " + id + ";");
              _this4._emitLine("}");
            } else {
              _this4._emit("null");
            }
          });
        }
        if (async) {
          var res = this._tmpid();
          this._emitLine(", " + this._makeCallback(res));
          this._emitLine(this.buffer + " += runtime.suppressValue(" + res + ", " + autoescape + " && env.opts.autoescape);");
          this._addScopeLevel();
        } else {
          this._emit(")");
          this._emit(", " + autoescape + " && env.opts.autoescape);\n");
        }
      };
      _proto.compileCallExtensionAsync = function compileCallExtensionAsync(node, frame) {
        this.compileCallExtension(node, frame, true);
      };
      _proto.compileNodeList = function compileNodeList(node, frame) {
        this._compileChildren(node, frame);
      };
      _proto.compileLiteral = function compileLiteral(node) {
        if (typeof node.value === "string") {
          var val = node.value.replace(/\\/g, "\\\\");
          val = val.replace(/"/g, '\\"');
          val = val.replace(/\n/g, "\\n");
          val = val.replace(/\r/g, "\\r");
          val = val.replace(/\t/g, "\\t");
          val = val.replace(/\u2028/g, "\\u2028");
          this._emit('"' + val + '"');
        } else if (node.value === null) {
          this._emit("null");
        } else {
          this._emit(node.value.toString());
        }
      };
      _proto.compileSymbol = function compileSymbol(node, frame) {
        var name = node.value;
        var v = frame.lookup(name);
        if (v) {
          this._emit(v);
        } else {
          this._emit('runtime.contextOrFrameLookup(context, frame, "' + name + '")');
        }
      };
      _proto.compileGroup = function compileGroup(node, frame) {
        this._compileAggregate(node, frame, "(", ")");
      };
      _proto.compileArray = function compileArray(node, frame) {
        this._compileAggregate(node, frame, "[", "]");
      };
      _proto.compileDict = function compileDict(node, frame) {
        this._compileAggregate(node, frame, "{", "}");
      };
      _proto.compilePair = function compilePair(node, frame) {
        var key = node.key;
        var val = node.value;
        if (key instanceof nodes.Symbol) {
          key = new nodes.Literal(key.lineno, key.colno, key.value);
        } else if (!(key instanceof nodes.Literal && typeof key.value === "string")) {
          this.fail("compilePair: Dict keys must be strings or names", key.lineno, key.colno);
        }
        this.compile(key, frame);
        this._emit(": ");
        this._compileExpression(val, frame);
      };
      _proto.compileInlineIf = function compileInlineIf(node, frame) {
        this._emit("(");
        this.compile(node.cond, frame);
        this._emit("?");
        this.compile(node.body, frame);
        this._emit(":");
        if (node.else_ !== null) {
          this.compile(node.else_, frame);
        } else {
          this._emit('""');
        }
        this._emit(")");
      };
      _proto.compileIn = function compileIn(node, frame) {
        this._emit("runtime.inOperator(");
        this.compile(node.left, frame);
        this._emit(",");
        this.compile(node.right, frame);
        this._emit(")");
      };
      _proto.compileIs = function compileIs(node, frame) {
        var right = node.right.name ? node.right.name.value : node.right.value;
        this._emit('env.getTest("' + right + '").call(context, ');
        this.compile(node.left, frame);
        if (node.right.args) {
          this._emit(",");
          this.compile(node.right.args, frame);
        }
        this._emit(") === true");
      };
      _proto._binOpEmitter = function _binOpEmitter(node, frame, str) {
        this.compile(node.left, frame);
        this._emit(str);
        this.compile(node.right, frame);
      };
      _proto.compileOr = function compileOr(node, frame) {
        return this._binOpEmitter(node, frame, " || ");
      };
      _proto.compileAnd = function compileAnd(node, frame) {
        return this._binOpEmitter(node, frame, " && ");
      };
      _proto.compileAdd = function compileAdd(node, frame) {
        return this._binOpEmitter(node, frame, " + ");
      };
      _proto.compileConcat = function compileConcat(node, frame) {
        return this._binOpEmitter(node, frame, ' + "" + ');
      };
      _proto.compileSub = function compileSub(node, frame) {
        return this._binOpEmitter(node, frame, " - ");
      };
      _proto.compileMul = function compileMul(node, frame) {
        return this._binOpEmitter(node, frame, " * ");
      };
      _proto.compileDiv = function compileDiv(node, frame) {
        return this._binOpEmitter(node, frame, " / ");
      };
      _proto.compileMod = function compileMod(node, frame) {
        return this._binOpEmitter(node, frame, " % ");
      };
      _proto.compileNot = function compileNot(node, frame) {
        this._emit("!");
        this.compile(node.target, frame);
      };
      _proto.compileFloorDiv = function compileFloorDiv(node, frame) {
        this._emit("Math.floor(");
        this.compile(node.left, frame);
        this._emit(" / ");
        this.compile(node.right, frame);
        this._emit(")");
      };
      _proto.compilePow = function compilePow(node, frame) {
        this._emit("Math.pow(");
        this.compile(node.left, frame);
        this._emit(", ");
        this.compile(node.right, frame);
        this._emit(")");
      };
      _proto.compileNeg = function compileNeg(node, frame) {
        this._emit("-");
        this.compile(node.target, frame);
      };
      _proto.compilePos = function compilePos(node, frame) {
        this._emit("+");
        this.compile(node.target, frame);
      };
      _proto.compileCompare = function compileCompare(node, frame) {
        var _this5 = this;
        this.compile(node.expr, frame);
        node.ops.forEach(function(op) {
          _this5._emit(" " + compareOps[op.type] + " ");
          _this5.compile(op.expr, frame);
        });
      };
      _proto.compileLookupVal = function compileLookupVal(node, frame) {
        this._emit("runtime.memberLookup((");
        this._compileExpression(node.target, frame);
        this._emit("),");
        this._compileExpression(node.val, frame);
        this._emit(")");
      };
      _proto._getNodeName = function _getNodeName(node) {
        switch (node.typename) {
          case "Symbol":
            return node.value;
          case "FunCall":
            return "the return value of (" + this._getNodeName(node.name) + ")";
          case "LookupVal":
            return this._getNodeName(node.target) + '["' + this._getNodeName(node.val) + '"]';
          case "Literal":
            return node.value.toString();
          default:
            return "--expression--";
        }
      };
      _proto.compileFunCall = function compileFunCall(node, frame) {
        this._emit("(lineno = " + node.lineno + ", colno = " + node.colno + ", ");
        this._emit("runtime.callWrap(");
        this._compileExpression(node.name, frame);
        this._emit(', "' + this._getNodeName(node.name).replace(/"/g, '\\"') + '", context, ');
        this._compileAggregate(node.args, frame, "[", "])");
        this._emit(")");
      };
      _proto.compileFilter = function compileFilter(node, frame) {
        var name = node.name;
        this.assertType(name, nodes.Symbol);
        this._emit('env.getFilter("' + name.value + '").call(context, ');
        this._compileAggregate(node.args, frame);
        this._emit(")");
      };
      _proto.compileFilterAsync = function compileFilterAsync(node, frame) {
        var name = node.name;
        var symbol = node.symbol.value;
        this.assertType(name, nodes.Symbol);
        frame.set(symbol, symbol);
        this._emit('env.getFilter("' + name.value + '").call(context, ');
        this._compileAggregate(node.args, frame);
        this._emitLine(", " + this._makeCallback(symbol));
        this._addScopeLevel();
      };
      _proto.compileKeywordArgs = function compileKeywordArgs(node, frame) {
        this._emit("runtime.makeKeywordArgs(");
        this.compileDict(node, frame);
        this._emit(")");
      };
      _proto.compileSet = function compileSet(node, frame) {
        var _this6 = this;
        var ids = [];
        node.targets.forEach(function(target) {
          var name = target.value;
          var id = frame.lookup(name);
          if (id === null || id === void 0) {
            id = _this6._tmpid();
            _this6._emitLine("var " + id + ";");
          }
          ids.push(id);
        });
        if (node.value) {
          this._emit(ids.join(" = ") + " = ");
          this._compileExpression(node.value, frame);
          this._emitLine(";");
        } else {
          this._emit(ids.join(" = ") + " = ");
          this.compile(node.body, frame);
          this._emitLine(";");
        }
        node.targets.forEach(function(target, i) {
          var id = ids[i];
          var name = target.value;
          _this6._emitLine('frame.set("' + name + '", ' + id + ", true);");
          _this6._emitLine("if(frame.topLevel) {");
          _this6._emitLine('context.setVariable("' + name + '", ' + id + ");");
          _this6._emitLine("}");
          if (name.charAt(0) !== "_") {
            _this6._emitLine("if(frame.topLevel) {");
            _this6._emitLine('context.addExport("' + name + '", ' + id + ");");
            _this6._emitLine("}");
          }
        });
      };
      _proto.compileSwitch = function compileSwitch(node, frame) {
        var _this7 = this;
        this._emit("switch (");
        this.compile(node.expr, frame);
        this._emit(") {");
        node.cases.forEach(function(c, i) {
          _this7._emit("case ");
          _this7.compile(c.cond, frame);
          _this7._emit(": ");
          _this7.compile(c.body, frame);
          if (c.body.children.length) {
            _this7._emitLine("break;");
          }
        });
        if (node.default) {
          this._emit("default:");
          this.compile(node.default, frame);
        }
        this._emit("}");
      };
      _proto.compileIf = function compileIf(node, frame, async) {
        var _this8 = this;
        this._emit("if(");
        this._compileExpression(node.cond, frame);
        this._emitLine(") {");
        this._withScopedSyntax(function() {
          _this8.compile(node.body, frame);
          if (async) {
            _this8._emit("cb()");
          }
        });
        if (node.else_) {
          this._emitLine("}\nelse {");
          this._withScopedSyntax(function() {
            _this8.compile(node.else_, frame);
            if (async) {
              _this8._emit("cb()");
            }
          });
        } else if (async) {
          this._emitLine("}\nelse {");
          this._emit("cb()");
        }
        this._emitLine("}");
      };
      _proto.compileIfAsync = function compileIfAsync(node, frame) {
        this._emit("(function(cb) {");
        this.compileIf(node, frame, true);
        this._emit("})(" + this._makeCallback());
        this._addScopeLevel();
      };
      _proto._emitLoopBindings = function _emitLoopBindings(node, arr, i, len) {
        var _this9 = this;
        var bindings = [{
          name: "index",
          val: i + " + 1"
        }, {
          name: "index0",
          val: i
        }, {
          name: "revindex",
          val: len + " - " + i
        }, {
          name: "revindex0",
          val: len + " - " + i + " - 1"
        }, {
          name: "first",
          val: i + " === 0"
        }, {
          name: "last",
          val: i + " === " + len + " - 1"
        }, {
          name: "length",
          val: len
        }];
        bindings.forEach(function(b) {
          _this9._emitLine('frame.set("loop.' + b.name + '", ' + b.val + ");");
        });
      };
      _proto.compileFor = function compileFor(node, frame) {
        var _this10 = this;
        var i = this._tmpid();
        var len = this._tmpid();
        var arr = this._tmpid();
        frame = frame.push();
        this._emitLine("frame = frame.push();");
        this._emit("var " + arr + " = ");
        this._compileExpression(node.arr, frame);
        this._emitLine(";");
        this._emit("if(" + arr + ") {");
        this._emitLine(arr + " = runtime.fromIterator(" + arr + ");");
        if (node.name instanceof nodes.Array) {
          this._emitLine("var " + i + ";");
          this._emitLine("if(runtime.isArray(" + arr + ")) {");
          this._emitLine("var " + len + " = " + arr + ".length;");
          this._emitLine("for(" + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");
          node.name.children.forEach(function(child, u) {
            var tid = _this10._tmpid();
            _this10._emitLine("var " + tid + " = " + arr + "[" + i + "][" + u + "];");
            _this10._emitLine('frame.set("' + child + '", ' + arr + "[" + i + "][" + u + "]);");
            frame.set(node.name.children[u].value, tid);
          });
          this._emitLoopBindings(node, arr, i, len);
          this._withScopedSyntax(function() {
            _this10.compile(node.body, frame);
          });
          this._emitLine("}");
          this._emitLine("} else {");
          var _node$name$children = node.name.children, key = _node$name$children[0], val = _node$name$children[1];
          var k = this._tmpid();
          var v = this._tmpid();
          frame.set(key.value, k);
          frame.set(val.value, v);
          this._emitLine(i + " = -1;");
          this._emitLine("var " + len + " = runtime.keys(" + arr + ").length;");
          this._emitLine("for(var " + k + " in " + arr + ") {");
          this._emitLine(i + "++;");
          this._emitLine("var " + v + " = " + arr + "[" + k + "];");
          this._emitLine('frame.set("' + key.value + '", ' + k + ");");
          this._emitLine('frame.set("' + val.value + '", ' + v + ");");
          this._emitLoopBindings(node, arr, i, len);
          this._withScopedSyntax(function() {
            _this10.compile(node.body, frame);
          });
          this._emitLine("}");
          this._emitLine("}");
        } else {
          var _v = this._tmpid();
          frame.set(node.name.value, _v);
          this._emitLine("var " + len + " = " + arr + ".length;");
          this._emitLine("for(var " + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");
          this._emitLine("var " + _v + " = " + arr + "[" + i + "];");
          this._emitLine('frame.set("' + node.name.value + '", ' + _v + ");");
          this._emitLoopBindings(node, arr, i, len);
          this._withScopedSyntax(function() {
            _this10.compile(node.body, frame);
          });
          this._emitLine("}");
        }
        this._emitLine("}");
        if (node.else_) {
          this._emitLine("if (!" + len + ") {");
          this.compile(node.else_, frame);
          this._emitLine("}");
        }
        this._emitLine("frame = frame.pop();");
      };
      _proto._compileAsyncLoop = function _compileAsyncLoop(node, frame, parallel) {
        var _this11 = this;
        var i = this._tmpid();
        var len = this._tmpid();
        var arr = this._tmpid();
        var asyncMethod = parallel ? "asyncAll" : "asyncEach";
        frame = frame.push();
        this._emitLine("frame = frame.push();");
        this._emit("var " + arr + " = runtime.fromIterator(");
        this._compileExpression(node.arr, frame);
        this._emitLine(");");
        if (node.name instanceof nodes.Array) {
          var arrayLen = node.name.children.length;
          this._emit("runtime." + asyncMethod + "(" + arr + ", " + arrayLen + ", function(");
          node.name.children.forEach(function(name) {
            _this11._emit(name.value + ",");
          });
          this._emit(i + "," + len + ",next) {");
          node.name.children.forEach(function(name) {
            var id2 = name.value;
            frame.set(id2, id2);
            _this11._emitLine('frame.set("' + id2 + '", ' + id2 + ");");
          });
        } else {
          var id = node.name.value;
          this._emitLine("runtime." + asyncMethod + "(" + arr + ", 1, function(" + id + ", " + i + ", " + len + ",next) {");
          this._emitLine('frame.set("' + id + '", ' + id + ");");
          frame.set(id, id);
        }
        this._emitLoopBindings(node, arr, i, len);
        this._withScopedSyntax(function() {
          var buf;
          if (parallel) {
            buf = _this11._pushBuffer();
          }
          _this11.compile(node.body, frame);
          _this11._emitLine("next(" + i + (buf ? "," + buf : "") + ");");
          if (parallel) {
            _this11._popBuffer();
          }
        });
        var output = this._tmpid();
        this._emitLine("}, " + this._makeCallback(output));
        this._addScopeLevel();
        if (parallel) {
          this._emitLine(this.buffer + " += " + output + ";");
        }
        if (node.else_) {
          this._emitLine("if (!" + arr + ".length) {");
          this.compile(node.else_, frame);
          this._emitLine("}");
        }
        this._emitLine("frame = frame.pop();");
      };
      _proto.compileAsyncEach = function compileAsyncEach(node, frame) {
        this._compileAsyncLoop(node, frame);
      };
      _proto.compileAsyncAll = function compileAsyncAll(node, frame) {
        this._compileAsyncLoop(node, frame, true);
      };
      _proto._compileMacro = function _compileMacro(node, frame) {
        var _this12 = this;
        var args = [];
        var kwargs = null;
        var funcId = "macro_" + this._tmpid();
        var keepFrame = frame !== void 0;
        node.args.children.forEach(function(arg, i) {
          if (i === node.args.children.length - 1 && arg instanceof nodes.Dict) {
            kwargs = arg;
          } else {
            _this12.assertType(arg, nodes.Symbol);
            args.push(arg);
          }
        });
        var realNames = [].concat(args.map(function(n) {
          return "l_" + n.value;
        }), ["kwargs"]);
        var argNames = args.map(function(n) {
          return '"' + n.value + '"';
        });
        var kwargNames = (kwargs && kwargs.children || []).map(function(n) {
          return '"' + n.key.value + '"';
        });
        var currFrame;
        if (keepFrame) {
          currFrame = frame.push(true);
        } else {
          currFrame = new Frame();
        }
        this._emitLines("var " + funcId + " = runtime.makeMacro(", "[" + argNames.join(", ") + "], ", "[" + kwargNames.join(", ") + "], ", "function (" + realNames.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (keepFrame ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }');
        args.forEach(function(arg) {
          _this12._emitLine('frame.set("' + arg.value + '", l_' + arg.value + ");");
          currFrame.set(arg.value, "l_" + arg.value);
        });
        if (kwargs) {
          kwargs.children.forEach(function(pair) {
            var name = pair.key.value;
            _this12._emit('frame.set("' + name + '", ');
            _this12._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + name + '")');
            _this12._emit(' ? kwargs["' + name + '"] : ');
            _this12._compileExpression(pair.value, currFrame);
            _this12._emit(");");
          });
        }
        var bufferId = this._pushBuffer();
        this._withScopedSyntax(function() {
          _this12.compile(node.body, currFrame);
        });
        this._emitLine("frame = " + (keepFrame ? "frame.pop();" : "callerFrame;"));
        this._emitLine("return new runtime.SafeString(" + bufferId + ");");
        this._emitLine("});");
        this._popBuffer();
        return funcId;
      };
      _proto.compileMacro = function compileMacro(node, frame) {
        var funcId = this._compileMacro(node);
        var name = node.name.value;
        frame.set(name, funcId);
        if (frame.parent) {
          this._emitLine('frame.set("' + name + '", ' + funcId + ");");
        } else {
          if (node.name.value.charAt(0) !== "_") {
            this._emitLine('context.addExport("' + name + '");');
          }
          this._emitLine('context.setVariable("' + name + '", ' + funcId + ");");
        }
      };
      _proto.compileCaller = function compileCaller(node, frame) {
        this._emit("(function (){");
        var funcId = this._compileMacro(node, frame);
        this._emit("return " + funcId + ";})()");
      };
      _proto._compileGetTemplate = function _compileGetTemplate(node, frame, eagerCompile, ignoreMissing) {
        var parentTemplateId = this._tmpid();
        var parentName = this._templateName();
        var cb = this._makeCallback(parentTemplateId);
        var eagerCompileArg = eagerCompile ? "true" : "false";
        var ignoreMissingArg = ignoreMissing ? "true" : "false";
        this._emit("env.getTemplate(");
        this._compileExpression(node.template, frame);
        this._emitLine(", " + eagerCompileArg + ", " + parentName + ", " + ignoreMissingArg + ", " + cb);
        return parentTemplateId;
      };
      _proto.compileImport = function compileImport(node, frame) {
        var target = node.target.value;
        var id = this._compileGetTemplate(node, frame, false, false);
        this._addScopeLevel();
        this._emitLine(id + ".getExported(" + (node.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(id));
        this._addScopeLevel();
        frame.set(target, id);
        if (frame.parent) {
          this._emitLine('frame.set("' + target + '", ' + id + ");");
        } else {
          this._emitLine('context.setVariable("' + target + '", ' + id + ");");
        }
      };
      _proto.compileFromImport = function compileFromImport(node, frame) {
        var _this13 = this;
        var importedId = this._compileGetTemplate(node, frame, false, false);
        this._addScopeLevel();
        this._emitLine(importedId + ".getExported(" + (node.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(importedId));
        this._addScopeLevel();
        node.names.children.forEach(function(nameNode) {
          var name;
          var alias;
          var id = _this13._tmpid();
          if (nameNode instanceof nodes.Pair) {
            name = nameNode.key.value;
            alias = nameNode.value.value;
          } else {
            name = nameNode.value;
            alias = name;
          }
          _this13._emitLine("if(Object.prototype.hasOwnProperty.call(" + importedId + ', "' + name + '")) {');
          _this13._emitLine("var " + id + " = " + importedId + "." + name + ";");
          _this13._emitLine("} else {");
          _this13._emitLine(`cb(new Error("cannot import '` + name + `'")); return;`);
          _this13._emitLine("}");
          frame.set(alias, id);
          if (frame.parent) {
            _this13._emitLine('frame.set("' + alias + '", ' + id + ");");
          } else {
            _this13._emitLine('context.setVariable("' + alias + '", ' + id + ");");
          }
        });
      };
      _proto.compileBlock = function compileBlock(node) {
        var id = this._tmpid();
        if (!this.inBlock) {
          this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : ');
        }
        this._emit('context.getBlock("' + node.name.value + '")');
        if (!this.inBlock) {
          this._emit(")");
        }
        this._emitLine("(env, context, frame, runtime, " + this._makeCallback(id));
        this._emitLine(this.buffer + " += " + id + ";");
        this._addScopeLevel();
      };
      _proto.compileSuper = function compileSuper(node, frame) {
        var name = node.blockName.value;
        var id = node.symbol.value;
        var cb = this._makeCallback(id);
        this._emitLine('context.getSuper(env, "' + name + '", b_' + name + ", frame, runtime, " + cb);
        this._emitLine(id + " = runtime.markSafe(" + id + ");");
        this._addScopeLevel();
        frame.set(id, id);
      };
      _proto.compileExtends = function compileExtends(node, frame) {
        var k = this._tmpid();
        var parentTemplateId = this._compileGetTemplate(node, frame, true, false);
        this._emitLine("parentTemplate = " + parentTemplateId);
        this._emitLine("for(var " + k + " in parentTemplate.blocks) {");
        this._emitLine("context.addBlock(" + k + ", parentTemplate.blocks[" + k + "]);");
        this._emitLine("}");
        this._addScopeLevel();
      };
      _proto.compileInclude = function compileInclude(node, frame) {
        this._emitLine("var tasks = [];");
        this._emitLine("tasks.push(");
        this._emitLine("function(callback) {");
        var id = this._compileGetTemplate(node, frame, false, node.ignoreMissing);
        this._emitLine("callback(null," + id + ");});");
        this._emitLine("});");
        var id2 = this._tmpid();
        this._emitLine("tasks.push(");
        this._emitLine("function(template, callback){");
        this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(id2));
        this._emitLine("callback(null," + id2 + ");});");
        this._emitLine("});");
        this._emitLine("tasks.push(");
        this._emitLine("function(result, callback){");
        this._emitLine(this.buffer + " += result;");
        this._emitLine("callback(null);");
        this._emitLine("});");
        this._emitLine("env.waterfall(tasks, function(){");
        this._addScopeLevel();
      };
      _proto.compileTemplateData = function compileTemplateData(node, frame) {
        this.compileLiteral(node, frame);
      };
      _proto.compileCapture = function compileCapture(node, frame) {
        var _this14 = this;
        var buffer = this.buffer;
        this.buffer = "output";
        this._emitLine("(function() {");
        this._emitLine('var output = "";');
        this._withScopedSyntax(function() {
          _this14.compile(node.body, frame);
        });
        this._emitLine("return output;");
        this._emitLine("})()");
        this.buffer = buffer;
      };
      _proto.compileOutput = function compileOutput(node, frame) {
        var _this15 = this;
        var children = node.children;
        children.forEach(function(child) {
          if (child instanceof nodes.TemplateData) {
            if (child.value) {
              _this15._emit(_this15.buffer + " += ");
              _this15.compileLiteral(child, frame);
              _this15._emitLine(";");
            }
          } else {
            _this15._emit(_this15.buffer + " += runtime.suppressValue(");
            if (_this15.throwOnUndefined) {
              _this15._emit("runtime.ensureDefined(");
            }
            _this15.compile(child, frame);
            if (_this15.throwOnUndefined) {
              _this15._emit("," + node.lineno + "," + node.colno + ")");
            }
            _this15._emit(", env.opts.autoescape);\n");
          }
        });
      };
      _proto.compileRoot = function compileRoot(node, frame) {
        var _this16 = this;
        if (frame) {
          this.fail("compileRoot: root node can't have frame");
        }
        frame = new Frame();
        this._emitFuncBegin(node, "root");
        this._emitLine("var parentTemplate = null;");
        this._compileChildren(node, frame);
        this._emitLine("if(parentTemplate) {");
        this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);");
        this._emitLine("} else {");
        this._emitLine("cb(null, " + this.buffer + ");");
        this._emitLine("}");
        this._emitFuncEnd(true);
        this.inBlock = true;
        var blockNames = [];
        var blocks = node.findAll(nodes.Block);
        blocks.forEach(function(block, i) {
          var name = block.name.value;
          if (blockNames.indexOf(name) !== -1) {
            throw new Error('Block "' + name + '" defined more than once.');
          }
          blockNames.push(name);
          _this16._emitFuncBegin(block, "b_" + name);
          var tmpFrame = new Frame();
          _this16._emitLine("var frame = frame.push(true);");
          _this16.compile(block.body, tmpFrame);
          _this16._emitFuncEnd();
        });
        this._emitLine("return {");
        blocks.forEach(function(block, i) {
          var blockName = "b_" + block.name.value;
          _this16._emitLine(blockName + ": " + blockName + ",");
        });
        this._emitLine("root: root\n};");
      };
      _proto.compile = function compile(node, frame) {
        var _compile = this["compile" + node.typename];
        if (_compile) {
          _compile.call(this, node, frame);
        } else {
          this.fail("compile: Cannot compile node: " + node.typename, node.lineno, node.colno);
        }
      };
      _proto.getCode = function getCode() {
        return this.codebuf.join("");
      };
      return Compiler2;
    }(Obj);
    module2.exports = {
      compile: function compile(src, asyncFilters, extensions, name, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var c = new Compiler(name, opts.throwOnUndefined);
        var preprocessors = (extensions || []).map(function(ext) {
          return ext.preprocess;
        }).filter(function(f) {
          return !!f;
        });
        var processedSrc = preprocessors.reduce(function(s, processor) {
          return processor(s);
        }, src);
        c.compile(transformer.transform(parser.parse(processedSrc, extensions, opts), asyncFilters, name));
        return c.getCode();
      },
      Compiler
    };
  }
});

// node_modules/nunjucks/src/filters.js
var require_filters = __commonJS({
  "node_modules/nunjucks/src/filters.js"(exports, module2) {
    "use strict";
    var lib = require_lib2();
    var r = require_runtime();
    var _exports = module2.exports = {};
    function normalize(value, defaultValue) {
      if (value === null || value === void 0 || value === false) {
        return defaultValue;
      }
      return value;
    }
    _exports.abs = Math.abs;
    function isNaN2(num) {
      return num !== num;
    }
    function batch(arr, linecount, fillWith) {
      var i;
      var res = [];
      var tmp = [];
      for (i = 0; i < arr.length; i++) {
        if (i % linecount === 0 && tmp.length) {
          res.push(tmp);
          tmp = [];
        }
        tmp.push(arr[i]);
      }
      if (tmp.length) {
        if (fillWith) {
          for (i = tmp.length; i < linecount; i++) {
            tmp.push(fillWith);
          }
        }
        res.push(tmp);
      }
      return res;
    }
    _exports.batch = batch;
    function capitalize2(str) {
      str = normalize(str, "");
      var ret = str.toLowerCase();
      return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
    }
    _exports.capitalize = capitalize2;
    function center(str, width) {
      str = normalize(str, "");
      width = width || 80;
      if (str.length >= width) {
        return str;
      }
      var spaces = width - str.length;
      var pre = lib.repeat(" ", spaces / 2 - spaces % 2);
      var post = lib.repeat(" ", spaces / 2);
      return r.copySafeness(str, pre + str + post);
    }
    _exports.center = center;
    function default_(val, def, bool) {
      if (bool) {
        return val || def;
      } else {
        return val !== void 0 ? val : def;
      }
    }
    _exports["default"] = default_;
    function dictsort(val, caseSensitive, by) {
      if (!lib.isObject(val)) {
        throw new lib.TemplateError("dictsort filter: val must be an object");
      }
      var array = [];
      for (var k in val) {
        array.push([k, val[k]]);
      }
      var si;
      if (by === void 0 || by === "key") {
        si = 0;
      } else if (by === "value") {
        si = 1;
      } else {
        throw new lib.TemplateError("dictsort filter: You can only sort by either key or value");
      }
      array.sort(function(t1, t2) {
        var a = t1[si];
        var b = t2[si];
        if (!caseSensitive) {
          if (lib.isString(a)) {
            a = a.toUpperCase();
          }
          if (lib.isString(b)) {
            b = b.toUpperCase();
          }
        }
        return a > b ? 1 : a === b ? 0 : -1;
      });
      return array;
    }
    _exports.dictsort = dictsort;
    function dump(obj, spaces) {
      return JSON.stringify(obj, null, spaces);
    }
    _exports.dump = dump;
    function escape(str) {
      if (str instanceof r.SafeString) {
        return str;
      }
      str = str === null || str === void 0 ? "" : str;
      return r.markSafe(lib.escape(str.toString()));
    }
    _exports.escape = escape;
    function safe(str) {
      if (str instanceof r.SafeString) {
        return str;
      }
      str = str === null || str === void 0 ? "" : str;
      return r.markSafe(str.toString());
    }
    _exports.safe = safe;
    function first(arr) {
      return arr[0];
    }
    _exports.first = first;
    function forceescape(str) {
      str = str === null || str === void 0 ? "" : str;
      return r.markSafe(lib.escape(str.toString()));
    }
    _exports.forceescape = forceescape;
    function groupby(arr, attr) {
      return lib.groupBy(arr, attr, this.env.opts.throwOnUndefined);
    }
    _exports.groupby = groupby;
    function indent(str, width, indentfirst) {
      str = normalize(str, "");
      if (str === "") {
        return "";
      }
      width = width || 4;
      var lines = str.split("\n");
      var sp = lib.repeat(" ", width);
      var res = lines.map(function(l, i) {
        return i === 0 && !indentfirst ? l : "" + sp + l;
      }).join("\n");
      return r.copySafeness(str, res);
    }
    _exports.indent = indent;
    function join4(arr, del, attr) {
      del = del || "";
      if (attr) {
        arr = lib.map(arr, function(v) {
          return v[attr];
        });
      }
      return arr.join(del);
    }
    _exports.join = join4;
    function last(arr) {
      return arr[arr.length - 1];
    }
    _exports.last = last;
    function lengthFilter(val) {
      var value = normalize(val, "");
      if (value !== void 0) {
        if (typeof Map === "function" && value instanceof Map || typeof Set === "function" && value instanceof Set) {
          return value.size;
        }
        if (lib.isObject(value) && !(value instanceof r.SafeString)) {
          return lib.keys(value).length;
        }
        return value.length;
      }
      return 0;
    }
    _exports.length = lengthFilter;
    function list(val) {
      if (lib.isString(val)) {
        return val.split("");
      } else if (lib.isObject(val)) {
        return lib._entries(val || {}).map(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return {
            key,
            value
          };
        });
      } else if (lib.isArray(val)) {
        return val;
      } else {
        throw new lib.TemplateError("list filter: type not iterable");
      }
    }
    _exports.list = list;
    function lower(str) {
      str = normalize(str, "");
      return str.toLowerCase();
    }
    _exports.lower = lower;
    function nl2br(str) {
      if (str === null || str === void 0) {
        return "";
      }
      return r.copySafeness(str, str.replace(/\r\n|\n/g, "<br />\n"));
    }
    _exports.nl2br = nl2br;
    function random(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    _exports.random = random;
    function getSelectOrReject(expectedTestResult) {
      function filter(arr, testName, secondArg) {
        if (testName === void 0) {
          testName = "truthy";
        }
        var context = this;
        var test = context.env.getTest(testName);
        return lib.toArray(arr).filter(function examineTestResult(item) {
          return test.call(context, item, secondArg) === expectedTestResult;
        });
      }
      return filter;
    }
    _exports.reject = getSelectOrReject(false);
    function rejectattr(arr, attr) {
      return arr.filter(function(item) {
        return !item[attr];
      });
    }
    _exports.rejectattr = rejectattr;
    _exports.select = getSelectOrReject(true);
    function selectattr(arr, attr) {
      return arr.filter(function(item) {
        return !!item[attr];
      });
    }
    _exports.selectattr = selectattr;
    function replace(str, old, new_, maxCount) {
      var originalStr = str;
      if (old instanceof RegExp) {
        return str.replace(old, new_);
      }
      if (typeof maxCount === "undefined") {
        maxCount = -1;
      }
      var res = "";
      if (typeof old === "number") {
        old = "" + old;
      } else if (typeof old !== "string") {
        return str;
      }
      if (typeof str === "number") {
        str = "" + str;
      }
      if (typeof str !== "string" && !(str instanceof r.SafeString)) {
        return str;
      }
      if (old === "") {
        res = new_ + str.split("").join(new_) + new_;
        return r.copySafeness(str, res);
      }
      var nextIndex = str.indexOf(old);
      if (maxCount === 0 || nextIndex === -1) {
        return str;
      }
      var pos = 0;
      var count = 0;
      while (nextIndex > -1 && (maxCount === -1 || count < maxCount)) {
        res += str.substring(pos, nextIndex) + new_;
        pos = nextIndex + old.length;
        count++;
        nextIndex = str.indexOf(old, pos);
      }
      if (pos < str.length) {
        res += str.substring(pos);
      }
      return r.copySafeness(originalStr, res);
    }
    _exports.replace = replace;
    function reverse(val) {
      var arr;
      if (lib.isString(val)) {
        arr = list(val);
      } else {
        arr = lib.map(val, function(v) {
          return v;
        });
      }
      arr.reverse();
      if (lib.isString(val)) {
        return r.copySafeness(val, arr.join(""));
      }
      return arr;
    }
    _exports.reverse = reverse;
    function round(val, precision, method) {
      precision = precision || 0;
      var factor = Math.pow(10, precision);
      var rounder;
      if (method === "ceil") {
        rounder = Math.ceil;
      } else if (method === "floor") {
        rounder = Math.floor;
      } else {
        rounder = Math.round;
      }
      return rounder(val * factor) / factor;
    }
    _exports.round = round;
    function slice(arr, slices, fillWith) {
      var sliceLength = Math.floor(arr.length / slices);
      var extra = arr.length % slices;
      var res = [];
      var offset = 0;
      for (var i = 0; i < slices; i++) {
        var start = offset + i * sliceLength;
        if (i < extra) {
          offset++;
        }
        var end = offset + (i + 1) * sliceLength;
        var currSlice = arr.slice(start, end);
        if (fillWith && i >= extra) {
          currSlice.push(fillWith);
        }
        res.push(currSlice);
      }
      return res;
    }
    _exports.slice = slice;
    function sum(arr, attr, start) {
      if (start === void 0) {
        start = 0;
      }
      if (attr) {
        arr = lib.map(arr, function(v) {
          return v[attr];
        });
      }
      return start + arr.reduce(function(a, b) {
        return a + b;
      }, 0);
    }
    _exports.sum = sum;
    _exports.sort = r.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function sortFilter(arr, reversed, caseSens, attr) {
      var _this = this;
      var array = lib.map(arr, function(v) {
        return v;
      });
      var getAttribute = lib.getAttrGetter(attr);
      array.sort(function(a, b) {
        var x = attr ? getAttribute(a) : a;
        var y = attr ? getAttribute(b) : b;
        if (_this.env.opts.throwOnUndefined && attr && (x === void 0 || y === void 0)) {
          throw new TypeError('sort: attribute "' + attr + '" resolved to undefined');
        }
        if (!caseSens && lib.isString(x) && lib.isString(y)) {
          x = x.toLowerCase();
          y = y.toLowerCase();
        }
        if (x < y) {
          return reversed ? 1 : -1;
        } else if (x > y) {
          return reversed ? -1 : 1;
        } else {
          return 0;
        }
      });
      return array;
    });
    function string(obj) {
      return r.copySafeness(obj, obj);
    }
    _exports.string = string;
    function striptags(input, preserveLinebreaks) {
      input = normalize(input, "");
      var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
      var trimmedInput = trim(input.replace(tags, ""));
      var res = "";
      if (preserveLinebreaks) {
        res = trimmedInput.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, "\n").replace(/\n\n\n+/g, "\n\n");
      } else {
        res = trimmedInput.replace(/\s+/gi, " ");
      }
      return r.copySafeness(input, res);
    }
    _exports.striptags = striptags;
    function title(str) {
      str = normalize(str, "");
      var words = str.split(" ").map(function(word) {
        return capitalize2(word);
      });
      return r.copySafeness(str, words.join(" "));
    }
    _exports.title = title;
    function trim(str) {
      return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ""));
    }
    _exports.trim = trim;
    function truncate(input, length, killwords, end) {
      var orig = input;
      input = normalize(input, "");
      length = length || 255;
      if (input.length <= length) {
        return input;
      }
      if (killwords) {
        input = input.substring(0, length);
      } else {
        var idx = input.lastIndexOf(" ", length);
        if (idx === -1) {
          idx = length;
        }
        input = input.substring(0, idx);
      }
      input += end !== void 0 && end !== null ? end : "...";
      return r.copySafeness(orig, input);
    }
    _exports.truncate = truncate;
    function upper(str) {
      str = normalize(str, "");
      return str.toUpperCase();
    }
    _exports.upper = upper;
    function urlencode(obj) {
      var enc = encodeURIComponent;
      if (lib.isString(obj)) {
        return enc(obj);
      } else {
        var keyvals = lib.isArray(obj) ? obj : lib._entries(obj);
        return keyvals.map(function(_ref2) {
          var k = _ref2[0], v = _ref2[1];
          return enc(k) + "=" + enc(v);
        }).join("&");
      }
    }
    _exports.urlencode = urlencode;
    var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/;
    var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
    var httpHttpsRe = /^https?:\/\/.*$/;
    var wwwRe = /^www\./;
    var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;
    function urlize(str, length, nofollow) {
      if (isNaN2(length)) {
        length = Infinity;
      }
      var noFollowAttr = nofollow === true ? ' rel="nofollow"' : "";
      var words = str.split(/(\s+)/).filter(function(word) {
        return word && word.length;
      }).map(function(word) {
        var matches = word.match(puncRe);
        var possibleUrl = matches ? matches[1] : word;
        var shortUrl = possibleUrl.substr(0, length);
        if (httpHttpsRe.test(possibleUrl)) {
          return '<a href="' + possibleUrl + '"' + noFollowAttr + ">" + shortUrl + "</a>";
        }
        if (wwwRe.test(possibleUrl)) {
          return '<a href="http://' + possibleUrl + '"' + noFollowAttr + ">" + shortUrl + "</a>";
        }
        if (emailRe.test(possibleUrl)) {
          return '<a href="mailto:' + possibleUrl + '">' + possibleUrl + "</a>";
        }
        if (tldRe.test(possibleUrl)) {
          return '<a href="http://' + possibleUrl + '"' + noFollowAttr + ">" + shortUrl + "</a>";
        }
        return word;
      });
      return words.join("");
    }
    _exports.urlize = urlize;
    function wordcount(str) {
      str = normalize(str, "");
      var words = str ? str.match(/\w+/g) : null;
      return words ? words.length : null;
    }
    _exports.wordcount = wordcount;
    function float(val, def) {
      var res = parseFloat(val);
      return isNaN2(res) ? def : res;
    }
    _exports.float = float;
    var intFilter = r.makeMacro(["value", "default", "base"], [], function doInt(value, defaultValue, base) {
      if (base === void 0) {
        base = 10;
      }
      var res = parseInt(value, base);
      return isNaN2(res) ? defaultValue : res;
    });
    _exports.int = intFilter;
    _exports.d = _exports.default;
    _exports.e = _exports.escape;
  }
});

// node_modules/nunjucks/src/loader.js
var require_loader = __commonJS({
  "node_modules/nunjucks/src/loader.js"(exports, module2) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var path6 = require("path");
    var _require = require_object();
    var EmitterObj = _require.EmitterObj;
    module2.exports = /* @__PURE__ */ function(_EmitterObj) {
      _inheritsLoose(Loader, _EmitterObj);
      function Loader() {
        return _EmitterObj.apply(this, arguments) || this;
      }
      var _proto = Loader.prototype;
      _proto.resolve = function resolve6(from, to) {
        return path6.resolve(path6.dirname(from), to);
      };
      _proto.isRelative = function isRelative(filename) {
        return filename.indexOf("./") === 0 || filename.indexOf("../") === 0;
      };
      return Loader;
    }(EmitterObj);
  }
});

// node_modules/nunjucks/src/precompiled-loader.js
var require_precompiled_loader = __commonJS({
  "node_modules/nunjucks/src/precompiled-loader.js"(exports, module2) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var Loader = require_loader();
    var PrecompiledLoader = /* @__PURE__ */ function(_Loader) {
      _inheritsLoose(PrecompiledLoader2, _Loader);
      function PrecompiledLoader2(compiledTemplates) {
        var _this;
        _this = _Loader.call(this) || this;
        _this.precompiled = compiledTemplates || {};
        return _this;
      }
      var _proto = PrecompiledLoader2.prototype;
      _proto.getSource = function getSource(name) {
        if (this.precompiled[name]) {
          return {
            src: {
              type: "code",
              obj: this.precompiled[name]
            },
            path: name
          };
        }
        return null;
      };
      return PrecompiledLoader2;
    }(Loader);
    module2.exports = {
      PrecompiledLoader
    };
  }
});

// node_modules/nunjucks/src/node-loaders.js
var require_node_loaders = __commonJS({
  "node_modules/nunjucks/src/node-loaders.js"(exports, module2) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var fs6 = require("fs");
    var path6 = require("path");
    var Loader = require_loader();
    var _require = require_precompiled_loader();
    var PrecompiledLoader = _require.PrecompiledLoader;
    var chokidar;
    var FileSystemLoader = /* @__PURE__ */ function(_Loader) {
      _inheritsLoose(FileSystemLoader2, _Loader);
      function FileSystemLoader2(searchPaths, opts) {
        var _this;
        _this = _Loader.call(this) || this;
        if (typeof opts === "boolean") {
          console.log("[nunjucks] Warning: you passed a boolean as the second argument to FileSystemLoader, but it now takes an options object. See http://mozilla.github.io/nunjucks/api.html#filesystemloader");
        }
        opts = opts || {};
        _this.pathsToNames = {};
        _this.noCache = !!opts.noCache;
        if (searchPaths) {
          searchPaths = Array.isArray(searchPaths) ? searchPaths : [searchPaths];
          _this.searchPaths = searchPaths.map(path6.normalize);
        } else {
          _this.searchPaths = ["."];
        }
        if (opts.watch) {
          try {
            chokidar = require("chokidar");
          } catch (e) {
            throw new Error("watch requires chokidar to be installed");
          }
          var paths = _this.searchPaths.filter(fs6.existsSync);
          var watcher = chokidar.watch(paths);
          watcher.on("all", function(event, fullname) {
            fullname = path6.resolve(fullname);
            if (event === "change" && fullname in _this.pathsToNames) {
              _this.emit("update", _this.pathsToNames[fullname], fullname);
            }
          });
          watcher.on("error", function(error) {
            console.log("Watcher error: " + error);
          });
        }
        return _this;
      }
      var _proto = FileSystemLoader2.prototype;
      _proto.getSource = function getSource(name) {
        var fullpath = null;
        var paths = this.searchPaths;
        for (var i = 0; i < paths.length; i++) {
          var basePath = path6.resolve(paths[i]);
          var p = path6.resolve(paths[i], name);
          if (p.indexOf(basePath) === 0 && fs6.existsSync(p)) {
            fullpath = p;
            break;
          }
        }
        if (!fullpath) {
          return null;
        }
        this.pathsToNames[fullpath] = name;
        var source = {
          src: fs6.readFileSync(fullpath, "utf-8"),
          path: fullpath,
          noCache: this.noCache
        };
        this.emit("load", name, source);
        return source;
      };
      return FileSystemLoader2;
    }(Loader);
    var NodeResolveLoader = /* @__PURE__ */ function(_Loader2) {
      _inheritsLoose(NodeResolveLoader2, _Loader2);
      function NodeResolveLoader2(opts) {
        var _this2;
        _this2 = _Loader2.call(this) || this;
        opts = opts || {};
        _this2.pathsToNames = {};
        _this2.noCache = !!opts.noCache;
        if (opts.watch) {
          try {
            chokidar = require("chokidar");
          } catch (e) {
            throw new Error("watch requires chokidar to be installed");
          }
          _this2.watcher = chokidar.watch();
          _this2.watcher.on("change", function(fullname) {
            _this2.emit("update", _this2.pathsToNames[fullname], fullname);
          });
          _this2.watcher.on("error", function(error) {
            console.log("Watcher error: " + error);
          });
          _this2.on("load", function(name, source) {
            _this2.watcher.add(source.path);
          });
        }
        return _this2;
      }
      var _proto2 = NodeResolveLoader2.prototype;
      _proto2.getSource = function getSource(name) {
        if (/^\.?\.?(\/|\\)/.test(name)) {
          return null;
        }
        if (/^[A-Z]:/.test(name)) {
          return null;
        }
        var fullpath;
        try {
          fullpath = require.resolve(name);
        } catch (e) {
          return null;
        }
        this.pathsToNames[fullpath] = name;
        var source = {
          src: fs6.readFileSync(fullpath, "utf-8"),
          path: fullpath,
          noCache: this.noCache
        };
        this.emit("load", name, source);
        return source;
      };
      return NodeResolveLoader2;
    }(Loader);
    module2.exports = {
      FileSystemLoader,
      PrecompiledLoader,
      NodeResolveLoader
    };
  }
});

// node_modules/nunjucks/src/loaders.js
var require_loaders = __commonJS({
  "node_modules/nunjucks/src/loaders.js"(exports, module2) {
    "use strict";
    module2.exports = require_node_loaders();
  }
});

// node_modules/nunjucks/src/tests.js
var require_tests = __commonJS({
  "node_modules/nunjucks/src/tests.js"(exports) {
    "use strict";
    var SafeString = require_runtime().SafeString;
    function callable(value) {
      return typeof value === "function";
    }
    exports.callable = callable;
    function defined(value) {
      return value !== void 0;
    }
    exports.defined = defined;
    function divisibleby(one, two) {
      return one % two === 0;
    }
    exports.divisibleby = divisibleby;
    function escaped(value) {
      return value instanceof SafeString;
    }
    exports.escaped = escaped;
    function equalto(one, two) {
      return one === two;
    }
    exports.equalto = equalto;
    exports.eq = exports.equalto;
    exports.sameas = exports.equalto;
    function even(value) {
      return value % 2 === 0;
    }
    exports.even = even;
    function falsy(value) {
      return !value;
    }
    exports.falsy = falsy;
    function ge(one, two) {
      return one >= two;
    }
    exports.ge = ge;
    function greaterthan(one, two) {
      return one > two;
    }
    exports.greaterthan = greaterthan;
    exports.gt = exports.greaterthan;
    function le(one, two) {
      return one <= two;
    }
    exports.le = le;
    function lessthan(one, two) {
      return one < two;
    }
    exports.lessthan = lessthan;
    exports.lt = exports.lessthan;
    function lower(value) {
      return value.toLowerCase() === value;
    }
    exports.lower = lower;
    function ne(one, two) {
      return one !== two;
    }
    exports.ne = ne;
    function nullTest(value) {
      return value === null;
    }
    exports.null = nullTest;
    function number(value) {
      return typeof value === "number";
    }
    exports.number = number;
    function odd(value) {
      return value % 2 === 1;
    }
    exports.odd = odd;
    function string(value) {
      return typeof value === "string";
    }
    exports.string = string;
    function truthy(value) {
      return !!value;
    }
    exports.truthy = truthy;
    function undefinedTest(value) {
      return value === void 0;
    }
    exports.undefined = undefinedTest;
    function upper(value) {
      return value.toUpperCase() === value;
    }
    exports.upper = upper;
    function iterable(value) {
      if (typeof Symbol !== "undefined") {
        return !!value[Symbol.iterator];
      } else {
        return Array.isArray(value) || typeof value === "string";
      }
    }
    exports.iterable = iterable;
    function mapping(value) {
      var bool = value !== null && value !== void 0 && typeof value === "object" && !Array.isArray(value);
      if (Set) {
        return bool && !(value instanceof Set);
      } else {
        return bool;
      }
    }
    exports.mapping = mapping;
  }
});

// node_modules/nunjucks/src/globals.js
var require_globals = __commonJS({
  "node_modules/nunjucks/src/globals.js"(exports, module2) {
    "use strict";
    function _cycler(items) {
      var index = -1;
      return {
        current: null,
        reset: function reset() {
          index = -1;
          this.current = null;
        },
        next: function next() {
          index++;
          if (index >= items.length) {
            index = 0;
          }
          this.current = items[index];
          return this.current;
        }
      };
    }
    function _joiner(sep) {
      sep = sep || ",";
      var first = true;
      return function() {
        var val = first ? "" : sep;
        first = false;
        return val;
      };
    }
    function globals() {
      return {
        range: function range(start, stop, step) {
          if (typeof stop === "undefined") {
            stop = start;
            start = 0;
            step = 1;
          } else if (!step) {
            step = 1;
          }
          var arr = [];
          if (step > 0) {
            for (var i = start; i < stop; i += step) {
              arr.push(i);
            }
          } else {
            for (var _i = start; _i > stop; _i += step) {
              arr.push(_i);
            }
          }
          return arr;
        },
        cycler: function cycler() {
          return _cycler(Array.prototype.slice.call(arguments));
        },
        joiner: function joiner(sep) {
          return _joiner(sep);
        }
      };
    }
    module2.exports = globals;
  }
});

// node_modules/nunjucks/src/express-app.js
var require_express_app = __commonJS({
  "node_modules/nunjucks/src/express-app.js"(exports, module2) {
    "use strict";
    var path6 = require("path");
    module2.exports = function express(env2, app) {
      function NunjucksView(name, opts) {
        this.name = name;
        this.path = name;
        this.defaultEngine = opts.defaultEngine;
        this.ext = path6.extname(name);
        if (!this.ext && !this.defaultEngine) {
          throw new Error("No default engine was specified and no extension was provided.");
        }
        if (!this.ext) {
          this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine;
        }
      }
      NunjucksView.prototype.render = function render(opts, cb) {
        env2.render(this.name, opts, cb);
      };
      app.set("view", NunjucksView);
      app.set("nunjucksEnv", env2);
      return env2;
    };
  }
});

// node_modules/nunjucks/src/environment.js
var require_environment = __commonJS({
  "node_modules/nunjucks/src/environment.js"(exports, module2) {
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var asap = require_asap();
    var _waterfall = require_a_sync_waterfall();
    var lib = require_lib2();
    var compiler = require_compiler();
    var filters = require_filters();
    var _require = require_loaders();
    var FileSystemLoader = _require.FileSystemLoader;
    var WebLoader = _require.WebLoader;
    var PrecompiledLoader = _require.PrecompiledLoader;
    var tests = require_tests();
    var globals = require_globals();
    var _require2 = require_object();
    var Obj = _require2.Obj;
    var EmitterObj = _require2.EmitterObj;
    var globalRuntime = require_runtime();
    var handleError = globalRuntime.handleError;
    var Frame = globalRuntime.Frame;
    var expressApp = require_express_app();
    function callbackAsap(cb, err, res) {
      asap(function() {
        cb(err, res);
      });
    }
    var noopTmplSrc = {
      type: "code",
      obj: {
        root: function root(env2, context, frame, runtime, cb) {
          try {
            cb(null, "");
          } catch (e) {
            cb(handleError(e, null, null));
          }
        }
      }
    };
    var Environment = /* @__PURE__ */ function(_EmitterObj) {
      _inheritsLoose(Environment2, _EmitterObj);
      function Environment2() {
        return _EmitterObj.apply(this, arguments) || this;
      }
      var _proto = Environment2.prototype;
      _proto.init = function init2(loaders, opts) {
        var _this = this;
        opts = this.opts = opts || {};
        this.opts.dev = !!opts.dev;
        this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true;
        this.opts.throwOnUndefined = !!opts.throwOnUndefined;
        this.opts.trimBlocks = !!opts.trimBlocks;
        this.opts.lstripBlocks = !!opts.lstripBlocks;
        this.loaders = [];
        if (!loaders) {
          if (FileSystemLoader) {
            this.loaders = [new FileSystemLoader("views")];
          } else if (WebLoader) {
            this.loaders = [new WebLoader("/views")];
          }
        } else {
          this.loaders = lib.isArray(loaders) ? loaders : [loaders];
        }
        if (typeof window !== "undefined" && window.nunjucksPrecompiled) {
          this.loaders.unshift(new PrecompiledLoader(window.nunjucksPrecompiled));
        }
        this._initLoaders();
        this.globals = globals();
        this.filters = {};
        this.tests = {};
        this.asyncFilters = [];
        this.extensions = {};
        this.extensionsList = [];
        lib._entries(filters).forEach(function(_ref) {
          var name = _ref[0], filter = _ref[1];
          return _this.addFilter(name, filter);
        });
        lib._entries(tests).forEach(function(_ref2) {
          var name = _ref2[0], test = _ref2[1];
          return _this.addTest(name, test);
        });
      };
      _proto._initLoaders = function _initLoaders() {
        var _this2 = this;
        this.loaders.forEach(function(loader) {
          loader.cache = {};
          if (typeof loader.on === "function") {
            loader.on("update", function(name, fullname) {
              loader.cache[name] = null;
              _this2.emit("update", name, fullname, loader);
            });
            loader.on("load", function(name, source) {
              _this2.emit("load", name, source, loader);
            });
          }
        });
      };
      _proto.invalidateCache = function invalidateCache() {
        this.loaders.forEach(function(loader) {
          loader.cache = {};
        });
      };
      _proto.addExtension = function addExtension(name, extension) {
        extension.__name = name;
        this.extensions[name] = extension;
        this.extensionsList.push(extension);
        return this;
      };
      _proto.removeExtension = function removeExtension(name) {
        var extension = this.getExtension(name);
        if (!extension) {
          return;
        }
        this.extensionsList = lib.without(this.extensionsList, extension);
        delete this.extensions[name];
      };
      _proto.getExtension = function getExtension(name) {
        return this.extensions[name];
      };
      _proto.hasExtension = function hasExtension(name) {
        return !!this.extensions[name];
      };
      _proto.addGlobal = function addGlobal(name, value) {
        this.globals[name] = value;
        return this;
      };
      _proto.getGlobal = function getGlobal(name) {
        if (typeof this.globals[name] === "undefined") {
          throw new Error("global not found: " + name);
        }
        return this.globals[name];
      };
      _proto.addFilter = function addFilter(name, func, async) {
        var wrapped = func;
        if (async) {
          this.asyncFilters.push(name);
        }
        this.filters[name] = wrapped;
        return this;
      };
      _proto.getFilter = function getFilter(name) {
        if (!this.filters[name]) {
          throw new Error("filter not found: " + name);
        }
        return this.filters[name];
      };
      _proto.addTest = function addTest(name, func) {
        this.tests[name] = func;
        return this;
      };
      _proto.getTest = function getTest(name) {
        if (!this.tests[name]) {
          throw new Error("test not found: " + name);
        }
        return this.tests[name];
      };
      _proto.resolveTemplate = function resolveTemplate(loader, parentName, filename) {
        var isRelative = loader.isRelative && parentName ? loader.isRelative(filename) : false;
        return isRelative && loader.resolve ? loader.resolve(parentName, filename) : filename;
      };
      _proto.getTemplate = function getTemplate(name, eagerCompile, parentName, ignoreMissing, cb) {
        var _this3 = this;
        var that = this;
        var tmpl = null;
        if (name && name.raw) {
          name = name.raw;
        }
        if (lib.isFunction(parentName)) {
          cb = parentName;
          parentName = null;
          eagerCompile = eagerCompile || false;
        }
        if (lib.isFunction(eagerCompile)) {
          cb = eagerCompile;
          eagerCompile = false;
        }
        if (name instanceof Template) {
          tmpl = name;
        } else if (typeof name !== "string") {
          throw new Error("template names must be a string: " + name);
        } else {
          for (var i = 0; i < this.loaders.length; i++) {
            var loader = this.loaders[i];
            tmpl = loader.cache[this.resolveTemplate(loader, parentName, name)];
            if (tmpl) {
              break;
            }
          }
        }
        if (tmpl) {
          if (eagerCompile) {
            tmpl.compile();
          }
          if (cb) {
            cb(null, tmpl);
            return void 0;
          } else {
            return tmpl;
          }
        }
        var syncResult;
        var createTemplate = function createTemplate2(err, info) {
          if (!info && !err && !ignoreMissing) {
            err = new Error("template not found: " + name);
          }
          if (err) {
            if (cb) {
              cb(err);
              return;
            } else {
              throw err;
            }
          }
          var newTmpl;
          if (!info) {
            newTmpl = new Template(noopTmplSrc, _this3, "", eagerCompile);
          } else {
            newTmpl = new Template(info.src, _this3, info.path, eagerCompile);
            if (!info.noCache) {
              info.loader.cache[name] = newTmpl;
            }
          }
          if (cb) {
            cb(null, newTmpl);
          } else {
            syncResult = newTmpl;
          }
        };
        lib.asyncIter(this.loaders, function(loader2, i2, next, done) {
          function handle(err, src) {
            if (err) {
              done(err);
            } else if (src) {
              src.loader = loader2;
              done(null, src);
            } else {
              next();
            }
          }
          name = that.resolveTemplate(loader2, parentName, name);
          if (loader2.async) {
            loader2.getSource(name, handle);
          } else {
            handle(null, loader2.getSource(name));
          }
        }, createTemplate);
        return syncResult;
      };
      _proto.express = function express(app) {
        return expressApp(this, app);
      };
      _proto.render = function render(name, ctx, cb) {
        if (lib.isFunction(ctx)) {
          cb = ctx;
          ctx = null;
        }
        var syncResult = null;
        this.getTemplate(name, function(err, tmpl) {
          if (err && cb) {
            callbackAsap(cb, err);
          } else if (err) {
            throw err;
          } else {
            syncResult = tmpl.render(ctx, cb);
          }
        });
        return syncResult;
      };
      _proto.renderString = function renderString(src, ctx, opts, cb) {
        if (lib.isFunction(opts)) {
          cb = opts;
          opts = {};
        }
        opts = opts || {};
        var tmpl = new Template(src, this, opts.path);
        return tmpl.render(ctx, cb);
      };
      _proto.waterfall = function waterfall(tasks, callback, forceAsync) {
        return _waterfall(tasks, callback, forceAsync);
      };
      return Environment2;
    }(EmitterObj);
    var Context = /* @__PURE__ */ function(_Obj) {
      _inheritsLoose(Context2, _Obj);
      function Context2() {
        return _Obj.apply(this, arguments) || this;
      }
      var _proto2 = Context2.prototype;
      _proto2.init = function init2(ctx, blocks, env2) {
        var _this4 = this;
        this.env = env2 || new Environment();
        this.ctx = lib.extend({}, ctx);
        this.blocks = {};
        this.exported = [];
        lib.keys(blocks).forEach(function(name) {
          _this4.addBlock(name, blocks[name]);
        });
      };
      _proto2.lookup = function lookup(name) {
        if (name in this.env.globals && !(name in this.ctx)) {
          return this.env.globals[name];
        } else {
          return this.ctx[name];
        }
      };
      _proto2.setVariable = function setVariable(name, val) {
        this.ctx[name] = val;
      };
      _proto2.getVariables = function getVariables() {
        return this.ctx;
      };
      _proto2.addBlock = function addBlock(name, block) {
        this.blocks[name] = this.blocks[name] || [];
        this.blocks[name].push(block);
        return this;
      };
      _proto2.getBlock = function getBlock(name) {
        if (!this.blocks[name]) {
          throw new Error('unknown block "' + name + '"');
        }
        return this.blocks[name][0];
      };
      _proto2.getSuper = function getSuper(env2, name, block, frame, runtime, cb) {
        var idx = lib.indexOf(this.blocks[name] || [], block);
        var blk = this.blocks[name][idx + 1];
        var context = this;
        if (idx === -1 || !blk) {
          throw new Error('no super block available for "' + name + '"');
        }
        blk(env2, context, frame, runtime, cb);
      };
      _proto2.addExport = function addExport(name) {
        this.exported.push(name);
      };
      _proto2.getExported = function getExported() {
        var _this5 = this;
        var exported = {};
        this.exported.forEach(function(name) {
          exported[name] = _this5.ctx[name];
        });
        return exported;
      };
      return Context2;
    }(Obj);
    var Template = /* @__PURE__ */ function(_Obj2) {
      _inheritsLoose(Template2, _Obj2);
      function Template2() {
        return _Obj2.apply(this, arguments) || this;
      }
      var _proto3 = Template2.prototype;
      _proto3.init = function init2(src, env2, path6, eagerCompile) {
        this.env = env2 || new Environment();
        if (lib.isObject(src)) {
          switch (src.type) {
            case "code":
              this.tmplProps = src.obj;
              break;
            case "string":
              this.tmplStr = src.obj;
              break;
            default:
              throw new Error("Unexpected template object type " + src.type + "; expected 'code', or 'string'");
          }
        } else if (lib.isString(src)) {
          this.tmplStr = src;
        } else {
          throw new Error("src must be a string or an object describing the source");
        }
        this.path = path6;
        if (eagerCompile) {
          try {
            this._compile();
          } catch (err) {
            throw lib._prettifyError(this.path, this.env.opts.dev, err);
          }
        } else {
          this.compiled = false;
        }
      };
      _proto3.render = function render(ctx, parentFrame, cb) {
        var _this6 = this;
        if (typeof ctx === "function") {
          cb = ctx;
          ctx = {};
        } else if (typeof parentFrame === "function") {
          cb = parentFrame;
          parentFrame = null;
        }
        var forceAsync = !parentFrame;
        try {
          this.compile();
        } catch (e) {
          var err = lib._prettifyError(this.path, this.env.opts.dev, e);
          if (cb) {
            return callbackAsap(cb, err);
          } else {
            throw err;
          }
        }
        var context = new Context(ctx || {}, this.blocks, this.env);
        var frame = parentFrame ? parentFrame.push(true) : new Frame();
        frame.topLevel = true;
        var syncResult = null;
        var didError = false;
        this.rootRenderFunc(this.env, context, frame, globalRuntime, function(err2, res) {
          if (didError && cb && typeof res !== "undefined") {
            return;
          }
          if (err2) {
            err2 = lib._prettifyError(_this6.path, _this6.env.opts.dev, err2);
            didError = true;
          }
          if (cb) {
            if (forceAsync) {
              callbackAsap(cb, err2, res);
            } else {
              cb(err2, res);
            }
          } else {
            if (err2) {
              throw err2;
            }
            syncResult = res;
          }
        });
        return syncResult;
      };
      _proto3.getExported = function getExported(ctx, parentFrame, cb) {
        if (typeof ctx === "function") {
          cb = ctx;
          ctx = {};
        }
        if (typeof parentFrame === "function") {
          cb = parentFrame;
          parentFrame = null;
        }
        try {
          this.compile();
        } catch (e) {
          if (cb) {
            return cb(e);
          } else {
            throw e;
          }
        }
        var frame = parentFrame ? parentFrame.push() : new Frame();
        frame.topLevel = true;
        var context = new Context(ctx || {}, this.blocks, this.env);
        this.rootRenderFunc(this.env, context, frame, globalRuntime, function(err) {
          if (err) {
            cb(err, null);
          } else {
            cb(null, context.getExported());
          }
        });
      };
      _proto3.compile = function compile() {
        if (!this.compiled) {
          this._compile();
        }
      };
      _proto3._compile = function _compile() {
        var props;
        if (this.tmplProps) {
          props = this.tmplProps;
        } else {
          var source = compiler.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
          var func = new Function(source);
          props = func();
        }
        this.blocks = this._getBlocks(props);
        this.rootRenderFunc = props.root;
        this.compiled = true;
      };
      _proto3._getBlocks = function _getBlocks(props) {
        var blocks = {};
        lib.keys(props).forEach(function(k) {
          if (k.slice(0, 2) === "b_") {
            blocks[k.slice(2)] = props[k];
          }
        });
        return blocks;
      };
      return Template2;
    }(Obj);
    module2.exports = {
      Environment,
      Template
    };
  }
});

// node_modules/nunjucks/src/precompile-global.js
var require_precompile_global = __commonJS({
  "node_modules/nunjucks/src/precompile-global.js"(exports, module2) {
    "use strict";
    function precompileGlobal(templates, opts) {
      var out = "";
      opts = opts || {};
      for (var i = 0; i < templates.length; i++) {
        var name = JSON.stringify(templates[i].name);
        var template = templates[i].template;
        out += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + name + "] = (function() {\n" + template + "\n})();\n";
        if (opts.asFunction) {
          out += "return function(ctx, cb) { return nunjucks.render(" + name + ", ctx, cb); }\n";
        }
        out += "})();\n";
      }
      return out;
    }
    module2.exports = precompileGlobal;
  }
});

// node_modules/nunjucks/src/precompile.js
var require_precompile = __commonJS({
  "node_modules/nunjucks/src/precompile.js"(exports, module2) {
    "use strict";
    var fs6 = require("fs");
    var path6 = require("path");
    var _require = require_lib2();
    var _prettifyError = _require._prettifyError;
    var compiler = require_compiler();
    var _require2 = require_environment();
    var Environment = _require2.Environment;
    var precompileGlobal = require_precompile_global();
    function match(filename, patterns) {
      if (!Array.isArray(patterns)) {
        return false;
      }
      return patterns.some(function(pattern) {
        return filename.match(pattern);
      });
    }
    function precompileString(str, opts) {
      opts = opts || {};
      opts.isString = true;
      var env2 = opts.env || new Environment([]);
      var wrapper = opts.wrapper || precompileGlobal;
      if (!opts.name) {
        throw new Error('the "name" option is required when compiling a string');
      }
      return wrapper([_precompile(str, opts.name, env2)], opts);
    }
    function precompile(input, opts) {
      opts = opts || {};
      var env2 = opts.env || new Environment([]);
      var wrapper = opts.wrapper || precompileGlobal;
      if (opts.isString) {
        return precompileString(input, opts);
      }
      var pathStats = fs6.existsSync(input) && fs6.statSync(input);
      var precompiled = [];
      var templates = [];
      function addTemplates(dir) {
        fs6.readdirSync(dir).forEach(function(file) {
          var filepath = path6.join(dir, file);
          var subpath = filepath.substr(path6.join(input, "/").length);
          var stat = fs6.statSync(filepath);
          if (stat && stat.isDirectory()) {
            subpath += "/";
            if (!match(subpath, opts.exclude)) {
              addTemplates(filepath);
            }
          } else if (match(subpath, opts.include)) {
            templates.push(filepath);
          }
        });
      }
      if (pathStats.isFile()) {
        precompiled.push(_precompile(fs6.readFileSync(input, "utf-8"), opts.name || input, env2));
      } else if (pathStats.isDirectory()) {
        addTemplates(input);
        for (var i = 0; i < templates.length; i++) {
          var name = templates[i].replace(path6.join(input, "/"), "");
          try {
            precompiled.push(_precompile(fs6.readFileSync(templates[i], "utf-8"), name, env2));
          } catch (e) {
            if (opts.force) {
              console.error(e);
            } else {
              throw e;
            }
          }
        }
      }
      return wrapper(precompiled, opts);
    }
    function _precompile(str, name, env2) {
      env2 = env2 || new Environment([]);
      var asyncFilters = env2.asyncFilters;
      var extensions = env2.extensionsList;
      var template;
      name = name.replace(/\\/g, "/");
      try {
        template = compiler.compile(str, asyncFilters, extensions, name, env2.opts);
      } catch (err) {
        throw _prettifyError(name, false, err);
      }
      return {
        name,
        template
      };
    }
    module2.exports = {
      precompile,
      precompileString
    };
  }
});

// node_modules/nunjucks/src/jinja-compat.js
var require_jinja_compat = __commonJS({
  "node_modules/nunjucks/src/jinja-compat.js"(exports, module2) {
    "use strict";
    function installCompat() {
      "use strict";
      var runtime = this.runtime;
      var lib = this.lib;
      var Compiler = this.compiler.Compiler;
      var Parser = this.parser.Parser;
      var nodes = this.nodes;
      var lexer = this.lexer;
      var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
      var orig_memberLookup = runtime.memberLookup;
      var orig_Compiler_assertType;
      var orig_Parser_parseAggregate;
      if (Compiler) {
        orig_Compiler_assertType = Compiler.prototype.assertType;
      }
      if (Parser) {
        orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
      }
      function uninstall() {
        runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
        runtime.memberLookup = orig_memberLookup;
        if (Compiler) {
          Compiler.prototype.assertType = orig_Compiler_assertType;
        }
        if (Parser) {
          Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
        }
      }
      runtime.contextOrFrameLookup = function contextOrFrameLookup(context, frame, key) {
        var val = orig_contextOrFrameLookup.apply(this, arguments);
        if (val !== void 0) {
          return val;
        }
        switch (key) {
          case "True":
            return true;
          case "False":
            return false;
          case "None":
            return null;
          default:
            return void 0;
        }
      };
      function getTokensState(tokens) {
        return {
          index: tokens.index,
          lineno: tokens.lineno,
          colno: tokens.colno
        };
      }
      if (process.env.BUILD_TYPE !== "SLIM" && nodes && Compiler && Parser) {
        var Slice = nodes.Node.extend("Slice", {
          fields: ["start", "stop", "step"],
          init: function init2(lineno, colno, start, stop, step) {
            start = start || new nodes.Literal(lineno, colno, null);
            stop = stop || new nodes.Literal(lineno, colno, null);
            step = step || new nodes.Literal(lineno, colno, 1);
            this.parent(lineno, colno, start, stop, step);
          }
        });
        Compiler.prototype.assertType = function assertType(node) {
          if (node instanceof Slice) {
            return;
          }
          orig_Compiler_assertType.apply(this, arguments);
        };
        Compiler.prototype.compileSlice = function compileSlice(node, frame) {
          this._emit("(");
          this._compileExpression(node.start, frame);
          this._emit("),(");
          this._compileExpression(node.stop, frame);
          this._emit("),(");
          this._compileExpression(node.step, frame);
          this._emit(")");
        };
        Parser.prototype.parseAggregate = function parseAggregate() {
          var _this = this;
          var origState = getTokensState(this.tokens);
          origState.colno--;
          origState.index--;
          try {
            return orig_Parser_parseAggregate.apply(this);
          } catch (e) {
            var errState = getTokensState(this.tokens);
            var rethrow = function rethrow2() {
              lib._assign(_this.tokens, errState);
              return e;
            };
            lib._assign(this.tokens, origState);
            this.peeked = false;
            var tok = this.peekToken();
            if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
              throw rethrow();
            } else {
              this.nextToken();
            }
            var node = new Slice(tok.lineno, tok.colno);
            var isSlice = false;
            for (var i = 0; i <= node.fields.length; i++) {
              if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
                break;
              }
              if (i === node.fields.length) {
                if (isSlice) {
                  this.fail("parseSlice: too many slice components", tok.lineno, tok.colno);
                } else {
                  break;
                }
              }
              if (this.skip(lexer.TOKEN_COLON)) {
                isSlice = true;
              } else {
                var field = node.fields[i];
                node[field] = this.parseExpression();
                isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
              }
            }
            if (!isSlice) {
              throw rethrow();
            }
            return new nodes.Array(tok.lineno, tok.colno, [node]);
          }
        };
      }
      function sliceLookup(obj, start, stop, step) {
        obj = obj || [];
        if (start === null) {
          start = step < 0 ? obj.length - 1 : 0;
        }
        if (stop === null) {
          stop = step < 0 ? -1 : obj.length;
        } else if (stop < 0) {
          stop += obj.length;
        }
        if (start < 0) {
          start += obj.length;
        }
        var results = [];
        for (var i = start; ; i += step) {
          if (i < 0 || i > obj.length) {
            break;
          }
          if (step > 0 && i >= stop) {
            break;
          }
          if (step < 0 && i <= stop) {
            break;
          }
          results.push(runtime.memberLookup(obj, i));
        }
        return results;
      }
      function hasOwnProp(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      var ARRAY_MEMBERS = {
        pop: function pop(index) {
          if (index === void 0) {
            return this.pop();
          }
          if (index >= this.length || index < 0) {
            throw new Error("KeyError");
          }
          return this.splice(index, 1);
        },
        append: function append(element) {
          return this.push(element);
        },
        remove: function remove(element) {
          for (var i = 0; i < this.length; i++) {
            if (this[i] === element) {
              return this.splice(i, 1);
            }
          }
          throw new Error("ValueError");
        },
        count: function count(element) {
          var count2 = 0;
          for (var i = 0; i < this.length; i++) {
            if (this[i] === element) {
              count2++;
            }
          }
          return count2;
        },
        index: function index(element) {
          var i;
          if ((i = this.indexOf(element)) === -1) {
            throw new Error("ValueError");
          }
          return i;
        },
        find: function find(element) {
          return this.indexOf(element);
        },
        insert: function insert(index, elem) {
          return this.splice(index, 0, elem);
        }
      };
      var OBJECT_MEMBERS = {
        items: function items() {
          return lib._entries(this);
        },
        values: function values() {
          return lib._values(this);
        },
        keys: function keys() {
          return lib.keys(this);
        },
        get: function get(key, def) {
          var output = this[key];
          if (output === void 0) {
            output = def;
          }
          return output;
        },
        has_key: function has_key(key) {
          return hasOwnProp(this, key);
        },
        pop: function pop(key, def) {
          var output = this[key];
          if (output === void 0 && def !== void 0) {
            output = def;
          } else if (output === void 0) {
            throw new Error("KeyError");
          } else {
            delete this[key];
          }
          return output;
        },
        popitem: function popitem() {
          var keys = lib.keys(this);
          if (!keys.length) {
            throw new Error("KeyError");
          }
          var k = keys[0];
          var val = this[k];
          delete this[k];
          return [k, val];
        },
        setdefault: function setdefault(key, def) {
          if (def === void 0) {
            def = null;
          }
          if (!(key in this)) {
            this[key] = def;
          }
          return this[key];
        },
        update: function update(kwargs) {
          lib._assign(this, kwargs);
          return null;
        }
      };
      OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
      OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
      OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;
      runtime.memberLookup = function memberLookup(obj, val, autoescape) {
        if (arguments.length === 4) {
          return sliceLookup.apply(this, arguments);
        }
        obj = obj || {};
        if (lib.isArray(obj) && hasOwnProp(ARRAY_MEMBERS, val)) {
          return ARRAY_MEMBERS[val].bind(obj);
        }
        if (lib.isObject(obj) && hasOwnProp(OBJECT_MEMBERS, val)) {
          return OBJECT_MEMBERS[val].bind(obj);
        }
        return orig_memberLookup.apply(this, arguments);
      };
      return uninstall;
    }
    module2.exports = installCompat;
  }
});

// node_modules/nunjucks/index.js
var require_nunjucks = __commonJS({
  "node_modules/nunjucks/index.js"(exports, module2) {
    "use strict";
    var lib = require_lib2();
    var _require = require_environment();
    var Environment = _require.Environment;
    var Template = _require.Template;
    var Loader = require_loader();
    var loaders = require_loaders();
    var precompile = require_precompile();
    var compiler = require_compiler();
    var parser = require_parser();
    var lexer = require_lexer();
    var runtime = require_runtime();
    var nodes = require_nodes();
    var installJinjaCompat = require_jinja_compat();
    var e;
    function configure(templatesPath, opts) {
      opts = opts || {};
      if (lib.isObject(templatesPath)) {
        opts = templatesPath;
        templatesPath = null;
      }
      var TemplateLoader;
      if (loaders.FileSystemLoader) {
        TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
          watch: opts.watch,
          noCache: opts.noCache
        });
      } else if (loaders.WebLoader) {
        TemplateLoader = new loaders.WebLoader(templatesPath, {
          useCache: opts.web && opts.web.useCache,
          async: opts.web && opts.web.async
        });
      }
      e = new Environment(TemplateLoader, opts);
      if (opts && opts.express) {
        e.express(opts.express);
      }
      return e;
    }
    module2.exports = {
      Environment,
      Template,
      Loader,
      FileSystemLoader: loaders.FileSystemLoader,
      NodeResolveLoader: loaders.NodeResolveLoader,
      PrecompiledLoader: loaders.PrecompiledLoader,
      WebLoader: loaders.WebLoader,
      compiler,
      parser,
      lexer,
      runtime,
      lib,
      nodes,
      installJinjaCompat,
      configure,
      reset: function reset() {
        e = void 0;
      },
      compile: function compile(src, env2, path6, eagerCompile) {
        if (!e) {
          configure();
        }
        return new Template(src, env2, path6, eagerCompile);
      },
      render: function render(name, ctx, cb) {
        if (!e) {
          configure();
        }
        return e.render(name, ctx, cb);
      },
      renderString: function renderString(src, ctx, cb) {
        if (!e) {
          configure();
        }
        return e.renderString(src, ctx, cb);
      },
      precompile: precompile ? precompile.precompile : void 0,
      precompileString: precompile ? precompile.precompileString : void 0
    };
  }
});

// index.ts
var fs5 = __toESM(require("fs"), 1);
var path5 = __toESM(require("path"), 1);

// utils/filesystem.ts
var fs = __toESM(require("fs"), 1);
var path = __toESM(require("path"), 1);

// node_modules/chalk/source/vendor/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
var styles = {
  modifier: {
    reset: [0, 0],
    // 21 isn't widely supported and 22 does the same thing
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    overline: [53, 55],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29]
  },
  color: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    // Bright color
    blackBright: [90, 39],
    gray: [90, 39],
    // Alias of `blackBright`
    grey: [90, 39],
    // Alias of `blackBright`
    redBright: [91, 39],
    greenBright: [92, 39],
    yellowBright: [93, 39],
    blueBright: [94, 39],
    magentaBright: [95, 39],
    cyanBright: [96, 39],
    whiteBright: [97, 39]
  },
  bgColor: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    // Bright color
    bgBlackBright: [100, 49],
    bgGray: [100, 49],
    // Alias of `bgBlackBright`
    bgGrey: [100, 49],
    // Alias of `bgBlackBright`
    bgRedBright: [101, 49],
    bgGreenBright: [102, 49],
    bgYellowBright: [103, 49],
    bgBlueBright: [104, 49],
    bgMagentaBright: [105, 49],
    bgCyanBright: [106, 49],
    bgWhiteBright: [107, 49]
  }
};
var modifierNames = Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
var colorNames = [...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var ansi_styles_default = ansiStyles;

// node_modules/chalk/source/vendor/supports-color/index.js
var import_node_process = __toESM(require("process"), 1);
var import_node_os = __toESM(require("os"), 1);
var import_node_tty = __toESM(require("tty"), 1);
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = import_node_process.default;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = forceColor || 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (import_node_process.default.platform === "win32") {
    const osRelease = import_node_os.default.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => key in env)) {
      return 3;
    }
    if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if (env.TERM === "xterm-ghostty") {
    return 3;
  }
  if (env.TERM === "wezterm") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
  stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
};
var supports_color_default = supportsColor;

// node_modules/chalk/source/utilities.js
function stringReplaceAll(string, substring, replacer) {
  let index = string.indexOf(substring);
  if (index === -1) {
    return string;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string.slice(endIndex, index) + substring + replacer;
    endIndex = index + substringLength;
    index = string.indexOf(substring, endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string[index - 1] === "\r";
    returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index + 1;
    index = string.indexOf("\n", endIndex);
  } while (index !== -1);
  returnValue += string.slice(endIndex);
  return returnValue;
}

// node_modules/chalk/source/index.js
var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
var GENERATOR = Symbol("GENERATOR");
var STYLER = Symbol("STYLER");
var IS_EMPTY = Symbol("IS_EMPTY");
var levelMapping = [
  "ansi",
  "ansi",
  "ansi256",
  "ansi16m"
];
var styles2 = /* @__PURE__ */ Object.create(null);
var applyOptions = (object, options = {}) => {
  if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
    throw new Error("The `level` option should be an integer from 0 to 3");
  }
  const colorLevel = stdoutColor ? stdoutColor.level : 0;
  object.level = options.level === void 0 ? colorLevel : options.level;
};
var chalkFactory = (options) => {
  const chalk2 = (...strings) => strings.join(" ");
  applyOptions(chalk2, options);
  Object.setPrototypeOf(chalk2, createChalk.prototype);
  return chalk2;
};
function createChalk(options) {
  return chalkFactory(options);
}
Object.setPrototypeOf(createChalk.prototype, Function.prototype);
for (const [styleName, style] of Object.entries(ansi_styles_default)) {
  styles2[styleName] = {
    get() {
      const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
      Object.defineProperty(this, styleName, { value: builder });
      return builder;
    }
  };
}
styles2.visible = {
  get() {
    const builder = createBuilder(this, this[STYLER], true);
    Object.defineProperty(this, "visible", { value: builder });
    return builder;
  }
};
var getModelAnsi = (model, level, type, ...arguments_) => {
  if (model === "rgb") {
    if (level === "ansi16m") {
      return ansi_styles_default[type].ansi16m(...arguments_);
    }
    if (level === "ansi256") {
      return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
    }
    return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
  }
  if (model === "hex") {
    return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
  }
  return ansi_styles_default[type][model](...arguments_);
};
var usedModels = ["rgb", "hex", "ansi256"];
for (const model of usedModels) {
  styles2[model] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
  const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
  styles2[bgModel] = {
    get() {
      const { level } = this;
      return function(...arguments_) {
        const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
        return createBuilder(this, styler, this[IS_EMPTY]);
      };
    }
  };
}
var proto = Object.defineProperties(() => {
}, {
  ...styles2,
  level: {
    enumerable: true,
    get() {
      return this[GENERATOR].level;
    },
    set(level) {
      this[GENERATOR].level = level;
    }
  }
});
var createStyler = (open, close, parent) => {
  let openAll;
  let closeAll;
  if (parent === void 0) {
    openAll = open;
    closeAll = close;
  } else {
    openAll = parent.openAll + open;
    closeAll = close + parent.closeAll;
  }
  return {
    open,
    close,
    openAll,
    closeAll,
    parent
  };
};
var createBuilder = (self2, _styler, _isEmpty) => {
  const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
  Object.setPrototypeOf(builder, proto);
  builder[GENERATOR] = self2;
  builder[STYLER] = _styler;
  builder[IS_EMPTY] = _isEmpty;
  return builder;
};
var applyStyle = (self2, string) => {
  if (self2.level <= 0 || !string) {
    return self2[IS_EMPTY] ? "" : string;
  }
  let styler = self2[STYLER];
  if (styler === void 0) {
    return string;
  }
  const { openAll, closeAll } = styler;
  if (string.includes("\x1B")) {
    while (styler !== void 0) {
      string = stringReplaceAll(string, styler.close, styler.open);
      styler = styler.parent;
    }
  }
  const lfIndex = string.indexOf("\n");
  if (lfIndex !== -1) {
    string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
  }
  return openAll + string + closeAll;
};
Object.defineProperties(createChalk.prototype, styles2);
var chalk = createChalk();
var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
var source_default = chalk;

// utils/logs.ts
var import_gradient_string = __toESM(require_gradient_string(), 1);
function logBanner() {
  console.log(`
${getBanner()}
`);
}
function logSuccess(message) {
  console.log(source_default.green("\u2714\uFE0E") + ` ${message}`);
}
function logWarning(message) {
  console.log(source_default.yellow(`\u25BA ${message}`));
}
function logError(message) {
  console.log(source_default.red("\u2716") + ` ${message}`);
}
function logErrorAndExit(message) {
  logError(message);
  process.exit(1);
}
async function logStep(title, callback) {
  try {
    const result = await spinner(`${title}...`, callback);
    logSuccess(`${title}.`);
    return result;
  } catch (e) {
    logError(`${title}.
`);
    console.log(e);
    process.exit(1);
  }
}
function logDone(ctx) {
  console.log(source_default.green("\u2714\uFE0E") + ` ${ctx.language.infos.done}
`);
  if (ctx.targetDirectory !== ctx.currentDirectory) {
    const cdCommand = `cd ${ctx.targetDirectoryName.includes(" ") ? `"${ctx.targetDirectoryName}"` : ctx.targetDirectoryName}`;
    console.log(`  ${source_default.bold(source_default.green(cdCommand))}`);
  }
  const installCommand = ctx.getNpmCommand("install");
  console.log(`  ${source_default.bold(source_default.green(installCommand))}`);
  const generateCommand = ctx.getNpmCommand("generate");
  console.log(`  ${source_default.bold(source_default.green(generateCommand))}`);
  console.log();
}
async function spinner(title, callback) {
  if (typeof title == "function") {
    callback = title;
    title = "";
  }
  let i = 0;
  const spin = () => process.stderr.write(`  ${"\u280B\u2819\u2839\u2838\u283C\u2834\u2826\u2827\u2807\u280F"[i++ % 10]} ${title}\r`);
  const id = setInterval(spin, 100);
  let result;
  try {
    result = await callback();
  } finally {
    clearInterval(id);
    process.stderr.write(" ".repeat(process.stdout.columns - 1) + "\r");
  }
  return result;
}
function getBanner() {
  const textBanner = "Create Solana Program";
  const gradientBanner = source_default.bold(
    (0, import_gradient_string.default)(["#89d7c8", "#dc7a8b"])(textBanner, {
      interpolation: "hsv",
      hsvSpin: "long"
    })
  );
  return process.stdout.isTTY && process.stdout.getColorDepth() > 8 ? gradientBanner : textBanner;
}

// utils/filesystem.ts
function createOrEmptyTargetDirectory(language, targetDirectoryName, shouldOverride) {
  const targetDirectory = path.join(process.cwd(), targetDirectoryName);
  if (!fs.existsSync(targetDirectory)) {
    fs.mkdirSync(targetDirectory, { recursive: true });
  } else if (shouldOverride) {
    emptyGitDirectory(targetDirectory);
  } else {
    logErrorAndExit(
      language.errors.cannotOverrideDirectory.replace(
        "$targetDirectory",
        targetDirectoryName
      )
    );
  }
}
function emptyGitDirectory(directory) {
  traverseGitDirectory(directory, (fullpath) => {
    fs.rmSync(fullpath, { recursive: true });
  });
}
function traverseGitDirectory(directory, callback) {
  for (const filename of fs.readdirSync(directory)) {
    if (filename === ".git")
      continue;
    const fullpath = path.resolve(directory, filename);
    if (fs.lstatSync(fullpath).isDirectory()) {
      traverseGitDirectory(fullpath, callback);
      callback(fullpath);
      continue;
    }
    callback(fullpath);
  }
}

// utils/inputArgs.ts
var import_node_util = require("util");

// utils/strings.ts
function capitalize(str) {
  if (str.length === 0)
    return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function titleCase(str) {
  return str.replace(/([A-Z])/g, " $1").split(/[-_\s+.]/).filter((word) => word.length > 0).map(capitalize).join(" ");
}
function pascalCase(str) {
  return titleCase(str).split(" ").join("");
}
function camelCase(str) {
  if (str.length === 0)
    return str;
  const pascalStr = pascalCase(str);
  return pascalStr.charAt(0).toLowerCase() + pascalStr.slice(1);
}
function kebabCase(str) {
  return titleCase(str).split(" ").join("-").toLowerCase();
}
function snakeCase(str) {
  return titleCase(str).split(" ").join("_").toLowerCase();
}

// utils/inputArgs.ts
function getInputsFromArgs() {
  const args = process.argv.slice(2);
  const { values: options, positionals } = (0, import_node_util.parseArgs)({
    args,
    options: {
      address: { type: "string" },
      anchor: { type: "boolean" },
      client: { type: "string", multiple: true },
      default: { type: "boolean", short: "d" },
      force: { type: "boolean" },
      "js-client-package-name": { type: "string" },
      "python-client-package-name": { type: "string" },
      "go-client-package-name": { type: "string" },
      "no-clients": { type: "boolean" },
      org: { type: "string" },
      "program-crate-name": { type: "string" },
      rust: { type: "string" },
      "rust-client-crate-name": { type: "string" },
      shank: { type: "boolean" },
      solana: { type: "string" },
      config: { type: "string" },
      interactive: { type: "boolean" },
      health: { type: "boolean" },
      migrate: { type: "string" },
      tutorial: { type: "boolean" }
    },
    strict: false
  });
  return parseArgInputs({
    address: options.address,
    anchorProgram: options.anchor ?? false,
    clients: options.client,
    force: options.force ?? false,
    jsClientPackageName: options["js-client-package-name"],
    pythonClientPackageName: options["python-client-package-name"],
    goClientPackageName: options["go-client-package-name"],
    noClients: options["no-clients"] ?? false,
    organizationName: options.org,
    programCrateName: options["program-crate-name"],
    programName: positionals[1],
    rustClientCrateName: options["rust-client-crate-name"],
    rustVersion: options.rust,
    shankProgram: options.shank ?? false,
    solanaVersion: options.solana,
    useDefaults: options.default ?? false,
    targetDirectoryName: positionals[0],
    configFile: options.config,
    interactiveMode: options.interactive ?? false,
    healthCheck: options.health ?? false,
    migrateProject: options.migrate,
    tutorialMode: options.tutorial ?? false
  });
}
function parseArgInputs(argInputs) {
  const inputs = {};
  if (argInputs.address)
    inputs.programAddress = argInputs.address;
  if (argInputs.organizationName)
    inputs.organizationName = kebabCase(argInputs.organizationName);
  if (argInputs.programName)
    inputs.programName = kebabCase(argInputs.programName);
  if (argInputs.rustVersion)
    inputs.rustVersion = argInputs.rustVersion;
  if (argInputs.solanaVersion)
    inputs.solanaVersion = argInputs.solanaVersion;
  if (argInputs.targetDirectoryName)
    inputs.targetDirectoryName = argInputs.targetDirectoryName;
  if (argInputs.jsClientPackageName)
    inputs.jsClientPackageName = argInputs.jsClientPackageName;
  if (argInputs.pythonClientPackageName)
    inputs.pythonClientPackageName = argInputs.pythonClientPackageName;
  if (argInputs.goClientPackageName)
    inputs.goClientPackageName = argInputs.goClientPackageName;
  if (argInputs.programCrateName)
    inputs.programCrateName = argInputs.programCrateName;
  if (argInputs.rustClientCrateName)
    inputs.rustClientCrateName = argInputs.rustClientCrateName;
  if (argInputs.force)
    inputs.shouldOverride = true;
  if (argInputs.useDefaults)
    inputs.useDefaults = true;
  if (argInputs.configFile)
    inputs.configFile = argInputs.configFile;
  if (argInputs.interactiveMode)
    inputs.interactiveMode = true;
  if (argInputs.healthCheck)
    inputs.healthCheck = true;
  if (argInputs.migrateProject)
    inputs.migrateProject = argInputs.migrateProject;
  if (argInputs.tutorialMode)
    inputs.tutorialMode = true;
  if (argInputs.anchorProgram) {
    inputs.programFramework = "anchor";
  } else if (argInputs.shankProgram) {
    inputs.programFramework = "shank";
  }
  if (argInputs.noClients) {
    inputs.jsClient = false;
    inputs.rustClient = false;
    inputs.pythonClient = false;
    inputs.goClient = false;
  } else if (argInputs.clients) {
    inputs.jsClient = argInputs.clients.includes("js");
    inputs.rustClient = argInputs.clients.includes("rust");
    inputs.pythonClient = argInputs.clients.includes("python");
    inputs.goClient = argInputs.clients.includes("go");
  }
  return inputs;
}

// utils/inputCore.ts
var allClients = ["js", "rust", "python", "go"];
function getDefaultInputs(partialInputs) {
  const organizationName = kebabCase(
    partialInputs.organizationName ?? "boomchainlab"
  );
  const parsedTargetDirectoryName = partialInputs.targetDirectoryName ? partialInputs.targetDirectoryName.split("/").pop() : "";
  const programName = kebabCase(
    partialInputs.programName ?? (parsedTargetDirectoryName || "my-program")
  );
  const programCrateName = partialInputs.programCrateName ?? `${organizationName}-${programName}`;
  return {
    jsClient: true,
    jsClientPackageName: `@${organizationName}/${programName}`,
    pythonClient: false,
    pythonClientPackageName: `${programName}-py`,
    goClient: false,
    goClientPackageName: `${programName}-go`,
    organizationName,
    programCrateName,
    programFramework: "shank",
    programName,
    rustClient: true,
    rustClientCrateName: `${programCrateName}-client`,
    shouldOverride: false,
    targetDirectoryName: programName,
    useDefaults: false,
    interactiveMode: false,
    healthCheck: false,
    tutorialMode: false,
    ...partialInputs
  };
}

// utils/inputPrompts.ts
var fs2 = __toESM(require("fs"), 1);
var import_prompts = __toESM(require_lib(), 1);
async function getInputsFromPrompts(language, argInputs) {
  let defaultInputs = getDefaultInputs(argInputs);
  try {
    const promptInputs = await (0, import_prompts.default)(
      [
        {
          name: "programName",
          type: argInputs.programName ? null : "text",
          message: language.programName.message,
          initial: () => defaultInputs.programName
        },
        {
          name: "shouldOverride",
          type: (_, values) => {
            if (argInputs.shouldOverride)
              return null;
            defaultInputs = parsePromptInputs(values, argInputs);
            return canSkipEmptying(defaultInputs.targetDirectoryName) ? null : "toggle";
          },
          message: () => {
            const dirForPrompt = defaultInputs.targetDirectoryName === "." ? language.shouldOverride.dirForPrompts.current : `${language.shouldOverride.dirForPrompts.target} "${defaultInputs.targetDirectoryName}"`;
            return `${dirForPrompt} ${language.shouldOverride.message}`;
          },
          initial: false,
          active: language.defaultToggleOptions.active,
          inactive: language.defaultToggleOptions.inactive
        },
        {
          name: "overwriteChecker",
          type: (_, values) => {
            if (values.shouldOverride === false) {
              throw new Error(
                source_default.red("\u2716") + ` ${language.errors.operationCancelled}`
              );
            }
            return null;
          }
        },
        {
          name: "organizationName",
          type: argInputs.organizationName ? null : "text",
          message: language.organizationName.message,
          initial: () => defaultInputs.organizationName
        },
        {
          name: "programCrateName",
          type: argInputs.programCrateName ? null : "text",
          message: language.programCrateName.message,
          initial: (_, values) => {
            defaultInputs = parsePromptInputs(values, argInputs);
            return defaultInputs.programCrateName;
          }
        },
        {
          name: "programFramework",
          type: argInputs.programFramework ? null : "select",
          message: language.programFramework.message,
          hint: language.instructions.select,
          initial: 0,
          choices: [
            {
              title: language.programFramework.selectOptions.shank.title,
              description: language.programFramework.selectOptions.shank.desc,
              value: "shank"
            },
            {
              title: language.programFramework.selectOptions.anchor.title,
              description: language.programFramework.selectOptions.anchor.desc,
              value: "anchor"
            }
          ]
        },
        {
          name: "clients",
          type: () => {
            const hasSelectedClients = [
              argInputs.jsClient,
              argInputs.rustClient
            ].every((client) => typeof client === "boolean");
            return hasSelectedClients ? null : "multiselect";
          },
          message: language.clients.message,
          hint: language.clients.hint,
          instructions: language.instructions.multiselect,
          choices: allClients.map((client) => ({
            title: language.clients.selectOptions[client].title,
            description: language.clients.selectOptions[client].desc,
            value: client,
            selected: true
          }))
        },
        {
          name: "jsClientPackageName",
          type: (_, values) => {
            if (argInputs.jsClientPackageName)
              return null;
            defaultInputs = parsePromptInputs(values, argInputs);
            return defaultInputs.jsClient ? "text" : null;
          },
          message: language.jsClientPackageName.message,
          initial: () => defaultInputs.jsClientPackageName
        },
        {
          name: "rustClientCrateName",
          type: (_, values) => {
            if (argInputs.rustClientCrateName)
              return null;
            defaultInputs = parsePromptInputs(values, argInputs);
            return defaultInputs.rustClient ? "text" : null;
          },
          message: language.rustClientCrateName.message,
          initial: () => defaultInputs.rustClientCrateName
        },
        {
          name: "pythonClientPackageName",
          type: (_, values) => {
            if (argInputs.pythonClientPackageName)
              return null;
            defaultInputs = parsePromptInputs(values, argInputs);
            return defaultInputs.pythonClient ? "text" : null;
          },
          message: "Python client package name",
          initial: () => defaultInputs.pythonClientPackageName
        },
        {
          name: "goClientPackageName",
          type: (_, values) => {
            if (argInputs.goClientPackageName)
              return null;
            defaultInputs = parsePromptInputs(values, argInputs);
            return defaultInputs.goClient ? "text" : null;
          },
          message: "Go client module name",
          initial: () => defaultInputs.goClientPackageName
        }
      ],
      {
        onCancel: () => {
          throw new Error(
            source_default.red("\u2716") + ` ${language.errors.operationCancelled}`
          );
        }
      }
    );
    console.log("");
    return parsePromptInputs(promptInputs, argInputs);
  } catch (cancelled) {
    console.log(cancelled.message);
    process.exit(1);
  }
}
function parsePromptInputs(promptInputs, argInputs) {
  const inputs = {};
  if (promptInputs.programName)
    inputs.programName = promptInputs.programName;
  if (promptInputs.shouldOverride !== void 0)
    inputs.shouldOverride = promptInputs.shouldOverride;
  if (promptInputs.organizationName)
    inputs.organizationName = promptInputs.organizationName;
  if (promptInputs.programCrateName)
    inputs.programCrateName = promptInputs.programCrateName;
  if (promptInputs.programFramework)
    inputs.programFramework = promptInputs.programFramework;
  if (promptInputs.clients !== void 0) {
    inputs.jsClient = promptInputs.clients.includes("js");
    inputs.rustClient = promptInputs.clients.includes("rust");
    inputs.pythonClient = promptInputs.clients.includes("python");
    inputs.goClient = promptInputs.clients.includes("go");
  }
  if (promptInputs.jsClientPackageName)
    inputs.jsClientPackageName = promptInputs.jsClientPackageName;
  if (promptInputs.pythonClientPackageName)
    inputs.pythonClientPackageName = promptInputs.pythonClientPackageName;
  if (promptInputs.goClientPackageName)
    inputs.goClientPackageName = promptInputs.goClientPackageName;
  if (promptInputs.rustClientCrateName)
    inputs.rustClientCrateName = promptInputs.rustClientCrateName;
  return getDefaultInputs({ ...argInputs, ...inputs });
}
function canSkipEmptying(dir) {
  if (!fs2.existsSync(dir)) {
    return true;
  }
  const files = fs2.readdirSync(dir);
  if (files.length === 0) {
    return true;
  }
  if (files.length === 1 && files[0] === ".git") {
    return true;
  }
  return false;
}

// utils/inputAll.ts
async function getInputs(language) {
  const argInputs = getInputsFromArgs();
  const defaultInputs = getDefaultInputs(argInputs);
  if (argInputs.useDefaults) {
    return defaultInputs;
  }
  return getInputsFromPrompts(language, argInputs);
}

// utils/localization.ts
var fs3 = __toESM(require("fs"), 1);
var path2 = __toESM(require("path"), 1);
function linkLocale(locale) {
  try {
    switch (Intl.getCanonicalLocales(locale)[0]) {
      case "zh-TW":
      case "zh-HK":
      case "zh-MO":
        return "zh-Hant";
        break;
      case "zh-CN":
      case "zh-SG":
        return "zh-Hans";
        break;
      default:
        return locale;
    }
  } catch (error) {
    console.log(`${error.toString()}
`);
    return locale;
  }
}
function getLocale() {
  const shellLocale = process.env.LC_ALL || // POSIX locale environment variables
  process.env.LC_MESSAGES || process.env.LANG || Intl.DateTimeFormat().resolvedOptions().locale || // Built-in ECMA-402 support
  "en-US";
  return linkLocale(shellLocale.split(".")[0].replace("_", "-"));
}
function getLanguage() {
  const locale = getLocale();
  const localesRoot = path2.resolve(__dirname, "locales");
  const languageFilePath = path2.resolve(localesRoot, `${locale}.json`);
  const doesLanguageExist = fs3.existsSync(languageFilePath);
  const lang = doesLanguageExist ? require(languageFilePath) : require(path2.resolve(localesRoot, "en-US.json"));
  return lang;
}

// utils/renderContext.ts
var path3 = __toESM(require("path"), 1);

// utils/packageManager.ts
function getPackageManager() {
  return "pnpm";
}
function getPackageManagerCommand(packageManager, scriptName, args) {
  if (scriptName === "install") {
    return packageManager === "yarn" ? "yarn" : `${packageManager} install`;
  }
  if (args) {
    return packageManager === "npm" ? `npm run ${scriptName} -- ${args}` : `${packageManager} ${scriptName} ${args}`;
  } else {
    return packageManager === "npm" ? `npm run ${scriptName}` : `${packageManager} ${scriptName}`;
  }
}

// utils/commands.ts
var import_node_child_process = require("child_process");
function spawnCommand(command, args = [], options) {
  return (0, import_node_child_process.spawn)(command, args, { ...options });
}
async function hasCommand(command) {
  try {
    await waitForCommand(spawnCommand("which", [command], { stdio: "ignore" }));
    return true;
  } catch {
    return false;
  }
}
async function waitForCommand(child) {
  return new Promise((resolve6, reject) => {
    var _a;
    const errorLogs = [];
    (_a = child.stderr) == null ? void 0 : _a.on("data", (data) => {
      errorLogs.push(data.toString());
    });
    child.on("close", (code) => {
      if (code !== 0) {
        console.log(errorLogs.join(""));
        const message = `$(${child.spawnargs.join(" ")}) exited with code ${code}`;
        reject(new Error(message));
      } else {
        resolve6(code);
      }
    });
  });
}
async function readStdout(child) {
  const stdout = [];
  return new Promise((resolve6) => {
    var _a;
    (_a = child.stdout) == null ? void 0 : _a.on("data", (data) => {
      stdout.push(data.toString());
    });
    child.on("close", () => resolve6(stdout));
  });
}

// utils/versionCore.ts
function isValidVersion(version) {
  return !!version.match(/^\d+\.\d+(\.\d+)?$/);
}
function assertIsValidVersion(language, tool, version) {
  if (!isValidVersion(version)) {
    throw new Error(
      language.errors.invalidVersion.replace("$version", version).replace("$tool", tool)
    );
  }
}
function compareVersions(a, b) {
  return a.localeCompare(b, void 0, { numeric: true });
}
function getVersionWithoutPatch(version) {
  var _a;
  return (_a = version.match(/^(\d+\.\d+)/)) == null ? void 0 : _a[1];
}
function getVersionAndVersionWithoutPatch(version, patchMap = {}) {
  const segments = version.split(".").length;
  if (segments === 3) {
    return [version, getVersionWithoutPatch(version)];
  }
  return [
    patchMap[version] ?? `${version}.0`,
    version
  ];
}
async function getVersionFromStdout(child) {
  var _a;
  const [stdout] = await Promise.all([
    readStdout(child),
    waitForCommand(child)
  ]);
  return (_a = stdout.join("").match(/(\d+\.\d+\.\d+)/)) == null ? void 0 : _a[1];
}

// utils/versionRust.ts
async function detectRustVersion() {
  const hasRustc = await hasCommand("rustc");
  if (!hasRustc) {
    return void 0;
  }
  return getVersionFromStdout(spawnCommand("rustc", ["--version"]));
}
function resolveRustVersion(language, solanaVersion, inputVersion, detectedVersion) {
  const solanaToRustMap = {
    "1.17": "1.75.0",
    "1.18": "1.75.0",
    "2.0": "1.75.0",
    "2.1": "1.79.0",
    "2.2": "1.79.0"
  };
  const fallbackVersion = solanaToRustMap[solanaVersion.withoutPatch] ?? "1.79.0";
  const version = inputVersion ?? detectedVersion ?? fallbackVersion;
  assertIsValidVersion(language, "Rust", version);
  const [full, withoutPatch] = getVersionAndVersionWithoutPatch(version);
  const rustVersion = { full, withoutPatch, detected: detectedVersion };
  warnAboutSolanaRustVersionMismatch(language, rustVersion, solanaVersion);
  return rustVersion;
}
function warnAboutSolanaRustVersionMismatch(language, rustVersion, solanaVersion) {
  const minimumViableRustVersionPerSolanaVersion = {
    "1.17": "1.68.0",
    "1.18": "1.75.0",
    "2.0": "1.75.0",
    "2.1": "1.79.0",
    "2.2": "1.79.0"
  };
  const minimumViableRustVersion = minimumViableRustVersionPerSolanaVersion[solanaVersion.withoutPatch];
  if (!minimumViableRustVersion)
    return;
  if (compareVersions(rustVersion.full, minimumViableRustVersion) < 0) {
    logWarning(
      language.errors.rustVersionIncompatibleWithSolana.replace("$solanaVersion", solanaVersion.withoutPatch).replace("$minimumRustVersion", minimumViableRustVersion).replace("$rustVersion", rustVersion.full)
    );
  }
}

// utils/versionAnchor.ts
async function detectAnchorVersion(language) {
  const hasAnchorCli = await hasCommand("anchor");
  if (!hasAnchorCli) {
    throw new Error(
      language.errors.solanaCliNotFound.replace("$command", "anchor")
    );
  }
  return getVersionFromStdout(spawnCommand("anchor", ["--version"]));
}
function resolveAnchorVersion(detectedVersion, solanaVersion) {
  const fallbackVersionMap = {
    "1.17": "0.29.0",
    "1.18": "0.30.0",
    "2.0": "0.30.0",
    "2.1": "0.31.0",
    "2.2": "0.31.0"
  };
  const fallbackVersion = fallbackVersionMap[solanaVersion.withoutPatch] ?? "0.30.0";
  const [full, withoutPatch] = getVersionAndVersionWithoutPatch(
    detectedVersion ?? fallbackVersion
  );
  return { full, withoutPatch, detected: detectedVersion };
}

// utils/versionSolana.ts
async function detectSolanaVersion(language) {
  const hasSolanaCli = await hasCommand("solana");
  if (!hasSolanaCli) {
    throw new Error(
      language.errors.solanaCliNotFound.replace("$command", "solana")
    );
  }
  return getVersionFromStdout(spawnCommand("solana", ["--version"]));
}
function resolveSolanaVersion(language, inputVersion, detectedVersion) {
  const version = inputVersion ?? detectedVersion ?? "";
  assertIsValidVersion(language, "Solana", version);
  const [full, withoutPatch] = getVersionAndVersionWithoutPatch(version, {
    "1.17": "1.17.34",
    "1.18": "1.18.18",
    "2.1": "2.1.16"
  });
  return { full, withoutPatch, detected: detectedVersion };
}

// utils/renderContext.ts
function getRenderContext({
  inputs,
  language,
  programAddress,
  solanaVersionDetected,
  rustVersionDetected,
  anchorVersionDetected
}) {
  const packageManager = getPackageManager();
  const clients = allClients.flatMap(
    (client) => inputs[`${client}Client`] ? [client] : []
  );
  const getNpmCommand = (...args) => getPackageManagerCommand(packageManager, ...args);
  const repositoryUrl = `https://github.com/${inputs.organizationName}/${inputs.targetDirectoryName}`;
  const solanaVersion = resolveSolanaVersion(
    language,
    inputs.solanaVersion,
    solanaVersionDetected
  );
  const anchorVersion = resolveAnchorVersion(
    anchorVersionDetected,
    solanaVersion
  );
  const rustVersion = resolveRustVersion(
    language,
    solanaVersion,
    inputs.rustVersion,
    rustVersionDetected
  );
  const templateDirectory = path3.resolve(__dirname, "template");
  const currentDirectory = process.cwd();
  const targetDirectory = path3.join(
    currentDirectory,
    inputs.targetDirectoryName
  );
  const programDirectory = path3.join(targetDirectory, "program");
  const clientDirectory = path3.join(targetDirectory, "client");
  return {
    ...inputs,
    anchorVersion,
    clientDirectory,
    clients,
    currentDirectory,
    getNpmCommand,
    language,
    packageManager,
    programAddress,
    programDirectory,
    repositoryUrl,
    rustVersion,
    solanaVersion,
    targetDirectory,
    templateDirectory,
    toolchain: rustVersion.full
  };
}

// utils/renderTemplates.ts
var fs4 = __toESM(require("fs"), 1);
var path4 = __toESM(require("path"), 1);
var import_nunjucks = __toESM(require_nunjucks(), 1);

// utils/objects.ts
var isObject = (val) => !!val && typeof val === "object";
var mergeArrayWithDedupe = (a, b) => Array.from(/* @__PURE__ */ new Set([...a, ...b]));
function deepMerge(target, obj) {
  for (const key of Object.keys(obj)) {
    const oldVal = target[key];
    const newVal = obj[key];
    if (Array.isArray(oldVal) && Array.isArray(newVal)) {
      target[key] = mergeArrayWithDedupe(oldVal, newVal);
    } else if (isObject(oldVal) && isObject(newVal)) {
      target[key] = deepMerge(oldVal, newVal);
    } else {
      target[key] = newVal;
    }
  }
  return target;
}
function sortDependencies(packageJson) {
  const sorted = {};
  const depTypes = [
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies"
  ];
  for (const depType of depTypes) {
    if (packageJson[depType]) {
      sorted[depType] = {};
      Object.keys(packageJson[depType]).sort().forEach((name) => {
        sorted[depType][name] = packageJson[depType][name];
      });
    }
  }
  return {
    ...packageJson,
    ...sorted
  };
}

// utils/renderTemplates.ts
function renderTemplate(ctx, src, dest) {
  const stats = fs4.statSync(src);
  if (stats.isDirectory()) {
    if (path4.basename(src) === "node_modules")
      return;
    fs4.mkdirSync(dest, { recursive: true });
    for (const file of fs4.readdirSync(src)) {
      renderTemplate(ctx, path4.resolve(src, file), path4.resolve(dest, file));
    }
    return;
  }
  const filename = path4.basename(src);
  if (filename.startsWith("_.")) {
    dest = path4.resolve(path4.dirname(dest), filename.replace(/^_./, "."));
  }
  if (filename === "_.gitignore" && fs4.existsSync(dest)) {
    const existing = fs4.readFileSync(dest, "utf8");
    const newGitignore = fs4.readFileSync(src, "utf8");
    fs4.writeFileSync(dest, existing + "\n" + newGitignore);
    return;
  }
  if (filename === "package.json" && fs4.existsSync(dest)) {
    const existing = JSON.parse(fs4.readFileSync(dest, "utf8"));
    const newPackage = JSON.parse(fs4.readFileSync(src, "utf8"));
    const pkg = sortDependencies(deepMerge(existing, newPackage));
    fs4.writeFileSync(dest, JSON.stringify(pkg, null, 2) + "\n");
    return;
  }
  if (filename.endsWith(".njk")) {
    dest = dest.replace(/\.njk$/, "");
    fs4.writeFileSync(dest, resolveNunjunksTemplate(src, ctx));
    fs4.chmodSync(dest, stats.mode);
    return;
  }
  fs4.copyFileSync(src, dest);
}
function resolveNunjunksTemplate(file, context, options) {
  const directory = path4.dirname(file);
  const filename = path4.basename(file);
  const env2 = import_nunjucks.default.configure(directory, {
    trimBlocks: true,
    autoescape: false,
    ...options
  });
  env2.addFilter("pascalCase", pascalCase);
  env2.addFilter("camelCase", camelCase);
  env2.addFilter("snakeCase", snakeCase);
  env2.addFilter("kebabCase", kebabCase);
  env2.addFilter("titleCase", titleCase);
  return env2.render(filename, context);
}

// utils/solanaCli.ts
async function patchSolanaDependencies(ctx) {
  const patchMap = {
    "1.17": ["-p ahash@0.8.11 --precise 0.8.6"]
  };
  const patches = patchMap[ctx.solanaVersion.withoutPatch] ?? [];
  await Promise.all(
    patches.map(
      async (patch) => waitForCommand(
        spawnCommand("cargo", ["update", ...patch.split(" ")], {
          cwd: ctx.targetDirectory
        })
      )
    )
  );
}
async function generateKeypair(language, outfile) {
  var _a;
  const hasSolanaKeygen = await hasCommand("solana-keygen");
  if (!hasSolanaKeygen) {
    throw new Error(
      language.errors.solanaCliNotFound.replace("$command", "solana-keygen")
    );
  }
  const child = spawnCommand("solana-keygen", [
    "new",
    "--no-bip39-passphrase",
    "--outfile",
    outfile
  ]);
  const [stdout] = await Promise.all([
    readStdout(child),
    waitForCommand(child)
  ]);
  const address = (_a = stdout.join("").match(/pubkey: (\w+)/)) == null ? void 0 : _a[1];
  if (!address) {
    throw new Error(language.errors.solanaKeygenFailed);
  }
  return address;
}

// index.ts
(async function init() {
  logBanner();
  const language = getLanguage();
  const inputs = await getInputs(language);
  createOrEmptyTargetDirectory(
    language,
    inputs.targetDirectoryName,
    inputs.shouldOverride
  );
  const solanaVersionDetected = await logStep(
    language.infos.detectSolanaVersion,
    () => detectSolanaVersion(language)
  );
  const rustVersionDetected = await logStep(
    language.infos.detectRustVersion,
    () => detectRustVersion()
  );
  let anchorVersionDetected;
  if (inputs.programFramework === "anchor") {
    anchorVersionDetected = await logStep(
      language.infos.detectAnchorVersion,
      () => detectAnchorVersion(language)
    );
  }
  const programAddress = inputs.programAddress ?? await logStep(language.infos.generateKeypair, () => {
    const outfile = path5.join(
      process.cwd(),
      inputs.targetDirectoryName,
      "program",
      "keypair.json"
    );
    return generateKeypair(language, outfile);
  });
  const ctx = getRenderContext({
    language,
    inputs,
    programAddress,
    solanaVersionDetected,
    rustVersionDetected,
    anchorVersionDetected
  });
  await logStep(
    language.infos.scaffold.replace(
      "$targetDirectory",
      inputs.targetDirectoryName
    ),
    async () => {
      renderTemplates(ctx);
      await patchSolanaDependencies(ctx);
    }
  );
  logDone(ctx);
})().catch((e) => console.error(e));
function renderTemplates(ctx) {
  const render = (templateName) => {
    const directory = path5.resolve(ctx.templateDirectory, templateName);
    if (!fs5.existsSync(directory))
      return;
    renderTemplate(ctx, directory, ctx.targetDirectory);
  };
  render("base");
  render(`${ctx.programFramework}/base`);
  if (ctx.clients.length > 0) {
    render("clients/base");
    render(`${ctx.programFramework}/clients/base`);
  }
  ctx.clients.forEach((client) => {
    render(`clients/${client}`);
    render(`${ctx.programFramework}/clients/${client}`);
  });
}

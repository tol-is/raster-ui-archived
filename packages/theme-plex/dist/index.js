(function () {
// ASSET: index.js
var $Focm$exports = {}; // type scale in px

const $Focm$var$type = [14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 44, 48, 54, 60, 66, 72, 80, 88, 96, 104]; // rhythm scale in baseline units

const $Focm$var$rhythm = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 21, 24, 28, 32, 36, 40, 48, 56];
$Focm$var$rhythm.px = '1px'; // measure scale in characters

const $Focm$var$measure = [12, 16, 20, 24, 28, 36, 44, 52, 60, 68, 84];
$Focm$var$measure.none = 'auto'; // leading scale in baseline units

const $Focm$var$leading = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // font config

const $Focm$var$fonts = {
  sans: [{
    familyName: 'IBM Plex Sans',
    fallback: 'sans',
    upm: 1000,
    xHeight: 525,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 400,
    italic: false
  }, {
    familyName: 'IBM Plex Sans',
    fallback: 'sans',
    upm: 1000,
    xHeight: 525,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 400,
    italic: true
  }, {
    familyName: 'IBM Plex Sans',
    fallback: 'sans',
    upm: 1000,
    xHeight: 525,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 700,
    italic: false
  }, {
    familyName: 'IBM Plex Sans',
    fallback: 'sans',
    upm: 1000,
    xHeight: 525,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 700,
    italic: true
  }],
  serif: [{
    familyName: 'IBM Plex Serif',
    fallback: 'serif',
    upm: 1000,
    xHeight: 516,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 400,
    italic: false
  }, {
    familyName: 'IBM Plex Serif',
    fallback: 'serif',
    upm: 1000,
    xHeight: 516,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 400,
    italic: true
  }, {
    familyName: 'IBM Plex Serif',
    fallback: 'serif',
    upm: 1000,
    xHeight: 516,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 700,
    italic: false
  }, {
    familyName: 'IBM Plex Serif',
    fallback: 'serif',
    upm: 1000,
    xHeight: 516,
    capHeight: 698,
    ascent: 1025,
    descent: -275,
    weight: 700,
    italic: true
  }]
};
$Focm$exports = {
  baseline: 4,
  root: 16,
  type: $Focm$var$type,
  rhythm: $Focm$var$rhythm,
  measure: $Focm$var$measure,
  leading: $Focm$var$leading,
  fonts: $Focm$var$fonts
};

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $Focm$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $Focm$exports;
  });
}
})();
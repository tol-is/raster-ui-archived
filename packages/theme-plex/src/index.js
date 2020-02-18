const type = [
  14,
  16,
  18,
  20,
  22,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  54,
  60,
  66,
  72,
  80,
  88,
  96,
  104
];

const rhythm = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56];
rhythm.half = '0.5';

const measure = [
  12,
  16,
  20,
  24,
  28,
  36,
  44,
  52,
  60,
  68,
  84,
  100,
  116,
  132,
  148
];

const fonts = {
  sans: [
    {
      familyName: 'IBM Plex Sans',
      fallback: 'sans',
      upm: 1000,
      xHeight: 525,
      capHeight: 698,
      ascent: 1025,
      descent: -275,
      weight: 400,
      italic: false
    },
    {
      familyName: 'IBM Plex Sans',
      fallback: 'sans',
      upm: 1000,
      xHeight: 525,
      capHeight: 698,
      ascent: 1025,
      descent: -275,
      weight: 400,
      italic: true
    }
  ],
  serif: [
    {
      familyName: 'IBM Plex Serif',
      fallback: 'serif',
      upm: 1000,
      xHeight: 516,
      capHeight: 698,
      ascent: 1025,
      descent: -275,
      weight: 700,
      italic: false
    },
    {
      familyName: 'IBM Plex Serif',
      fallback: 'serif',
      upm: 1000,
      xHeight: 516,
      capHeight: 698,
      ascent: 1025,
      descent: -275,
      weight: 700,
      italic: true
    }
  ]
};

module.exports = {
  baseline: 8,
  root: 16,
  type,
  rhythm,
  measure,
  fonts
};

const tailwindcss = require('tailwindcss');
const postcss = require('postcss');
const { scaleToRem } = require('./utils/scale-to-rem');
const tailwindPlugin = require('./tailwind-compositor-plugin');

const compositor = config => css => {
  const { theme, plugins = [], corePlugins, ...configRest } = config;

  const {
    screens = {
      sm: '30rem',
      md: '42.5rem',
      lg: '80rem',
      xl: '105rem'
    },
    root = 16,
    baseline = 8,
    typeScale = [
      14,
      16,
      18,
      20,
      22,
      26,
      30,
      34,
      38,
      44,
      50,
      56,
      64,
      70,
      78,
      86,
      94,
      104,
      114,
      124
    ],
    rhythm = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56],
    measure = [12, 16, 20, 24, 28, 36, 44, 52, 60, 68, 84, 100, 116, 132, 148],
    colors = {
      mono: [
        '#FFFFFF',
        '#F3F3F3',
        '#F6F6F6',
        '#F8F8F8',
        '#e5e5e5',
        '#737373',
        '#A0A0A0',
        '#000000'
      ]
    },
    fonts,
    extend: themeExtend,
    ...themeRest
  } = theme;

  const spaceScale = [...rhythm];
  spaceScale.px = '1px';
  const toScale = scaleToRem(root)(baseline);
  const spacing = toScale(spaceScale);
  const fontSize = scaleToRem(root)(1)(typeScale);

  const tailwindPlugins = [
    ...plugins,
    tailwindPlugin({
      responsive: true,
      root,
      baseline,
      typeScale,
      measure,
      fonts
    })
  ];

  const tailwindTheme = {
    spacing,
    colors,
    fontSize,
    ...themeRest,
    extend: {
      ...themeExtend,
      minHeight: {
        ...spacing
      },
      maxHeight: {
        ...spacing
      },
      minWidth: {
        ...spacing
      },
      maxWidth: {
        ...spacing
      }
    }
  };

  const tailwindConfig = {
    theme: tailwindTheme,
    plugins: tailwindPlugins,
    corePlugins: {
      ...corePlugins
    },
    ...configRest
  };

  return tailwindConfig;
};

module.exports = compositor;

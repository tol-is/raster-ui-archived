const tailwindcss = require('tailwindcss');
const { themeCompositor } = require('@styled-rhythm/tailwindcss');

const themePlex = require('./theme');
themePlex.fonts = {
	mono: [
		{
			familyName: 'JetBrainsMono',
			fallback: 'monospace',
			upm: 1000,
			xHeight: 486,
			capHeight: 710,
			ascent: 978,
			descent: -258,
			weight: 400,
			italic: false,
		},
	],
};

const tailwindConfig = {
	theme: {},
	corePlugins: {
		fontSize: false,
		fontFamily: false,
		fontWeight: false,
		fontStyle: false,
		letterSpacing: false,
		lineHeight: false,
		gap: false,
		gridAutoFlow: false,
		gridTemplateColumns: false,
		gridColumn: false,
		gridColumnStart: false,
		gridColumnEnd: false,
		gridTemplateRows: false,
		gridRow: false,
		gridRowStart: false,
		gridRowEnd: false,
	},
};

module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [require('stylelint')],
		}),
		tailwindcss(themeCompositor(tailwindConfig)(themePlex)),
		require('postcss-preset-env')({
			autoprefixer: { grid: true },
			features: {
				'nesting-rules': true,
			},
			browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
		}),
	],
};

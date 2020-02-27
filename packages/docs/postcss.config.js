const tailwindcss = require('tailwindcss');
const { themeCompositor } = require('@styled-rhythm/tailwindcss');
const themePlex = require('./theme');

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

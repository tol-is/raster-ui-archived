const tailwindcss = require('tailwindcss');
const { themeCompositor } = require('@styled-rhythm/tailwindcss');
const themePlex = require('./theme');

const tailwindConfig = {
	theme: {
		screens: {
			sm: '30rem',
			md: '42.5rem',
			lg: '80rem',
			xl: '105rem',
		},
		colors: {
			mono: [
				'#FFFFFF',
				'#F4F4F4',
				'#E9E9E9',
				'#D9D9D9',
				'#C5C5C5',
				'#AAAAAA',
				'#878787',
				'#5E5E5E',
				'#303030',
				'#121212',
				'#000000',
			],
		},
	},
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

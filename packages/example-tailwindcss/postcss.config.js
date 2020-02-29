const tailwindcss = require('tailwindcss');
const { themeCompositor } = require('@styled-rhythm/tailwindcss');
const themePlex = require('@styled-rhythm/theme-plex');

themePlex.baseline = 8;

const baseTailwindConfig = {
	theme: {
		screens: {
			sm: '32rem',
			md: '60rem',
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
};

const tailwindConfig = themeCompositor(baseTailwindConfig)(themePlex);

module.exports = {
	plugins: [tailwindcss(tailwindConfig)],
};

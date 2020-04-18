const tailwindcss = require('tailwindcss');
const { compose } = require('@raster-system/tailwindcss');
const themePlex = require('@raster-system/theme-plex');

const baseTailwindConfig = {
	theme: {
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

const tailwindConfig = compose(baseTailwindConfig)(themePlex);

module.exports = {
	plugins: [tailwindcss(tailwindConfig)],
};

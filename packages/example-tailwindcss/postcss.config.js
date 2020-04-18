const tailwindcss = require('tailwindcss');
const { compose } = require('@raster-system/tailwindcss');
const themePlex = require('@raster-system/theme-plex');

const tailwindConfig = compose({})(themePlex);

module.exports = {
	plugins: [tailwindcss(tailwindConfig)],
};

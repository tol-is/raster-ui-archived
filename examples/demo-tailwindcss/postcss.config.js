const tailwindcss = require('tailwindcss');
const { compose } = require('@raster-ui/tailwindcss');
const themePlex = require('@raster-ui/theme-plex');

const tailwindConfig = compose({})(themePlex);

module.exports = {
	plugins: [tailwindcss(tailwindConfig)],
};

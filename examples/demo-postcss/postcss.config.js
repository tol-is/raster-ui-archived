const { default: rasterSystem } = require('@raster-ui/postcss');
const themePlex = require('@raster-ui/theme-plex');

module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [require('stylelint')],
		}),
		rasterSystem(themePlex),
		require('postcss-preset-env')({
			stage: 1,
			autoprefixer: { grid: true },
			features: {
				'nesting-rules': true,
			},
			browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
		}),
	],
};

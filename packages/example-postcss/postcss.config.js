const { default: styledRhythm } = require('@styled-rhythm/postcss');
const themePlex = require('@styled-rhythm/theme-plex');

module.exports = {
	plugins: [
		require('postcss-import')({
			plugins: [require('stylelint')],
		}),
		styledRhythm(themePlex),
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

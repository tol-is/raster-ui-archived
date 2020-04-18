const tailwindPlugin = require('./tailwind-plugin');

const {
	baselineScaleToRem,
	baselineScaleToPx,
} = require('@raster-system/utils');

const createConfig = tailwindConfig => rhythmConfig => {
	// tailwind config values
	const {
		theme = {},
		plugins = [],
		extend = {},
		...tailwindRest
	} = tailwindConfig;
	const { relative, root, baseline, rhythm } = rhythmConfig;

	// override spacing scale
	// - rhythm is described in baseline units
	// - convert rhythm scale to rem
	const spacingScale = relative
		? baselineScaleToRem(baseline)(root)(rhythm)
		: baselineScaleToPx(baseline)(rhythm);

	// use spacing in height and min/max height
	const {
		height = {},
		minHeight = {},
		maxHeight = {},
		...tailwindExtend
	} = extend;

	// spread spacing to tailwind theme
	const tailwindTheme = {
		...theme,
		...rhythmConfig,
		spacing: spacingScale,
		extend: {
			...tailwindExtend,
			height: {
				...height,
				...spacingScale,
			},
			minHeight: {
				...minHeight,
				...spacingScale,
			},
			maxHeight: {
				...maxHeight,
				...spacingScale,
			},
		},
	};

	// spread plugins to tailwind plugins config
	const tailwindPlugins = [...plugins, tailwindPlugin(rhythmConfig)];

	// return tailwind config object
	return {
		theme: tailwindTheme,
		plugins: tailwindPlugins,
		...tailwindRest,
	};
};

module.exports = createConfig;

const { bgBaselineRel, bgBaseline } = require('@raster-ui/core');

const createBackgroundStyles = ({ theme, options, e, addUtilities }) => {
	const { baseline, root, useRem } = options;

	const baselineBgStyles = {
		[`.bg-baseline`]: useRem
			? bgBaselineRel({ baseline, root })
			: bgBaseline({ baseline }),
	};

	addUtilities(baselineBgStyles, []);
};

module.exports = createBackgroundStyles;

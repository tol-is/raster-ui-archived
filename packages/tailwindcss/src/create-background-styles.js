const { bgBaselineRel, bgBaseline } = require('@raster-ui/core');

const createBackgroundStyles = ({ theme, options, e, addUtilities }) => {
	const { baseline, root, relative } = options;

	const baselineBgStyles = {
		[`.bg-baseline`]: relative
			? bgBaselineRel({ baseline, root })
			: bgBaseline({ baseline }),
	};

	addUtilities(baselineBgStyles, []);
};

module.exports = createBackgroundStyles;

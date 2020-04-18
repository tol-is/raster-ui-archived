const { measure, measureMin, measureMax } = require('@raster-system/core');

/**
 *
 *
 */
const createMeasureStyles = ({ theme, options, e, addUtilities }) => {
	const { measure: measureScale } = options;

	const measureStyles = measureScale.map((length, idx) => {
		return {
			[`.${e(`measure-${idx}`)}`]: measure({ length }),
			[`.${e(`measure-min-${idx}`)}`]: measureMin({ length }),
			[`.${e(`measure-max-${idx}`)}`]: measureMax({ length }),
		};
	});

	addUtilities(measureStyles, ['responsive']);
};

module.exports = createMeasureStyles;

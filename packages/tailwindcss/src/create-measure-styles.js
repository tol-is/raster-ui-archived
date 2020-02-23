/**
 *
 *
 */
const createMeasureStyles = ({ theme, options, e, addUtilities }) => {
	const { measure } = options;

	const measureStyles = measure.map((space, idx) => {
		return {
			[`.${e(`measure-${idx}`)}`]: {
				maxWidth: `${space}ch`,
			},
			[`.${e(`measure-min-${idx}`)}`]: {
				minWidth: `${space}ch`,
			},
			[`.${e(`measure-max-${idx}`)}`]: {
				maxWidth: `${space}ch`,
			},
		};
	});

	addUtilities(measureStyles, [options.responsive ? 'responsive' : null]);
};

module.exports = createMeasureStyles;

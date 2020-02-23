var flattenDeep = require('lodash.flattendeep');

/**
 *
 *
 */
const createGridStyles = ({ theme, options, e, addUtilities }) => {
	const columns = Array.from(new Array(24 + 1), (v, i) => i);

	const gridStyles = columns.map(columnIndex => {
		const columnIndexValue = columnIndex === 0 ? 1 : columnIndex;
		return {
			[`.${e(`columns-${columnIndex}`)}`]: {
				display: 'grid',
				gridTemplateColumns: `repeat(${columnIndexValue}, minmax(0,1fr))`,
				[`& > * `]: {
					gridColumn: 'span 1',
				},
			},
		};
	});

	const gridColumnStyles = flattenDeep(
		columns.map(startIndex => {
			return columns.map(endIndex => {
				if (startIndex + endIndex > columns.length) return null;
				if (endIndex === 0) return null;

				const startIndexValue = startIndex === 0 ? 1 : startIndex;

				return {
					[`.${e(`col-${startIndex}/${endIndex}`)}`]: {
						gridColumn: `${startIndexValue} / span ${endIndex}`,
					},
				};
			});
		})
	).filter(Boolean);

	const gridRowStyles = flattenDeep(
		columns.map(startIndex => {
			return columns.map(endIndex => {
				if (endIndex === 0) return null;

				const startIndexValue = startIndex === 0 ? 1 : startIndex;

				return {
					[`.${e(`row-${startIndex}/${endIndex}`)}`]: {
						gridRow: `${startIndexValue} / span ${endIndex}`,
					},
				};
			});
		})
	).filter(Boolean);

	const rhythmScale = theme('spacing');
	const gridGapStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`columns-gap-${key}`)}`]: {
				gridRowGap: space,
				gridColumnGap: space,
			},
			[`.${e(`columns-gap-y-${key}`)}`]: {
				gridRowGap: space,
			},
			[`.${e(`columns-gap-x-${key}`)}`]: {
				gridColumnGap: space,
			},
		};
	});

	addUtilities(gridStyles, ['responsive']);
	addUtilities(gridColumnStyles, ['responsive']);
	addUtilities(gridRowStyles, ['responsive']);
	addUtilities(gridGapStyles, ['responsive']);
};

module.exports = createGridStyles;

var flattenDeep = require('lodash.flattendeep');
const {
	gridMatrix,
	gridMatrixCell,
	gridMatrixGap,
	gridMatrixGapX,
	gridMatrixGapY,
} = require('@raster-ui/core');

/**
 *
 *
 */
const createMatrixStyles = ({ theme, options, e, addUtilities }) => {
	const columnsScale = Array.from(new Array(24 + 1), (v, i) => i);

	const gridMatrixStyles = columnsScale.map(columnIndex => {
		const columns = columnIndex === 0 ? 1 : columnIndex;
		return {
			[`.${e(`matrix-${columnIndex}`)}`]: gridMatrix({ columns }),
		};
	});

	const gridCellStyles = flattenDeep(
		columnsScale.map(startIndex => {
			return columnsScale.map(endIndex => {
				if (startIndex + endIndex > columnsScale.length) return null;
				if (endIndex === 0) return null;

				const startIndexValue = startIndex === 0 ? 1 : startIndex;

				return {
					[`.${e(
						`matrix-cell-${startIndex}/${endIndex}`
					)}`]: gridMatrixCell({
						start: startIndexValue,
						span: endIndex,
					}),
				};
			});
		})
	).filter(Boolean);

	const rhythmScale = theme('spacing');
	const gridGapStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`matrix-gap-${key}`)}`]: gridMatrixGap({ key, space }),
			[`.${e(`matrix-gap-y-${key}`)}`]: gridMatrixGapX({ key, space }),
			[`.${e(`matrix-gap-x-${key}`)}`]: gridMatrixGapY({ key, space }),
		};
	});

	addUtilities(gridMatrixStyles, ['responsive']);
	addUtilities(gridCellStyles, ['responsive']);
	addUtilities(gridGapStyles, ['responsive']);
};

module.exports = createMatrixStyles;

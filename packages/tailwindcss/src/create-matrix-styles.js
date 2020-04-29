var flattenDeep = require('lodash.flattendeep');
const {
	gridMatrix,
	gridMatrixColumns,
	gridMatrixRows,
	gridMatrixCell,
	gridMatrixGap,
	gridMatrixGapX,
	gridMatrixGapY,
} = require('@raster-system/core');

/**
 *
 *
 */
const createMatrixStyles = ({ theme, options, e, addUtilities }) => {
	const columnsScale = Array.from(
		new Array(options.matrixSize + 1),
		(v, i) => i
	);

	const rhythmScale = theme('spacing');

	const gridMatrixColumnsStyles = columnsScale.map(columnIndex => {
		const columns = columnIndex === 0 ? 1 : columnIndex;

		return {
			[`.${e(`matrix-${columnIndex}`)}`]: gridMatrixColumns({
				columns,
			}),
		};
	});

	const gridMatrixRowsStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`matrix-rows-${key}`)}`]: gridMatrixRows({
				rhythm: space,
			}),
		};
		// return {};
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

	const gridGapStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`matrix-gap-${key}`)}`]: gridMatrixGap({ key, space }),
			[`.${e(`matrix-gap-x-${key}`)}`]: gridMatrixGapX({ key, space }),
			[`.${e(`matrix-gap-y-${key}`)}`]: gridMatrixGapY({ key, space }),
		};
	});

	addUtilities(gridMatrixColumnsStyles, ['responsive']);
	addUtilities(gridMatrixRowsStyles, ['responsive']);
	addUtilities(gridCellStyles, ['responsive']);
	addUtilities(gridGapStyles, ['responsive']);
};

module.exports = createMatrixStyles;

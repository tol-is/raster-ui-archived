var flattenDeep = require('lodash.flattendeep');
const {
	gridRaster,
	gridCell,
	gridGap,
	gridGapX,
	gridGapY,
}  = require('@raster-ui/core');

/**
 *
 *
 */
const createRasterStyles = ({ theme, options, e, addUtilities }) => {
	const columnsScale = Array.from(new Array(24 + 1), (v, i) => i);

	const gridRasterStyles = columnsScale.map(columnIndex => {
		const columns = columnIndex === 0 ? 1 : columnIndex;
		return {
			[`.${e(`raster-${columnIndex}`)}`]: gridRaster({ columns }),
		};
	});

	const gridCellStyles = flattenDeep(
		columnsScale.map(startIndex => {
			return columnsScale.map(endIndex => {
				if (startIndex + endIndex > columnsScale.length) return null;
				if (endIndex === 0) return null;

				const startIndexValue = startIndex === 0 ? 1 : startIndex;

				return {
					[`.${e(`cell-${startIndex}/${endIndex}`)}`]: gridCell({
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
			[`.${e(`raster-gap-${key}`)}`]: gridGap({ key, space }),
			[`.${e(`raster-gap-y-${key}`)}`]: gridGapX({ key, space }),
			[`.${e(`raster-gap-x-${key}`)}`]: gridGapY({ key, space }),
		};
	});

	addUtilities(gridRasterStyles, ['responsive']);
	addUtilities(gridCellStyles, ['responsive']);
	addUtilities(gridGapStyles, ['responsive']);
};

module.exports = createRasterStyles;

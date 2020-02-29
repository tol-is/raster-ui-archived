var flattenDeep = require('lodash.flattendeep');
const { columns, column, gap, gapX, gapY } = require('@styled-rhythm/core');

/**
 *
 *
 */
const createGridStyles = ({ theme, options, e, addUtilities }) => {
	const columnsScale = Array.from(new Array(24 + 1), (v, i) => i);

	const gridStyles = columnsScale.map(columnIndex => {
		const count = columnIndex === 0 ? 1 : columnIndex;
		return {
			[`.${e(`columns-${columnIndex}`)}`]: columns({ count }),
		};
	});

	const gridColumnStyles = flattenDeep(
		columnsScale.map(startIndex => {
			return columnsScale.map(endIndex => {
				if (startIndex + endIndex > columnsScale.length) return null;
				if (endIndex === 0) return null;

				const startIndexValue = startIndex === 0 ? 1 : startIndex;

				return {
					[`.${e(`col-${startIndex}/${endIndex}`)}`]: column({ start: startIndexValue, span: endIndex }),
				};
			});
		})
	).filter(Boolean);

	// const gridRowStyles = flattenDeep(
	// 	columnsScale.map(startIndex => {
	// 		return columnsScale.map(endIndex => {
	// 			if (endIndex === 0) return null;

	// 			const startIndexValue = startIndex === 0 ? 1 : startIndex;

	// 			return {
	// 				[`.${e(`row-${startIndex}/${endIndex}`)}`]: {
	// 					gridRow: `${startIndexValue} / span ${endIndex}`,
	// 				},
	// 			};
	// 		});
	// 	})
	// ).filter(Boolean);

	const rhythmScale = theme('spacing');
	const gridGapStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`columns-gap-${key}`)}`]: gap({ key, space }),
			[`.${e(`columns-gap-y-${key}`)}`]: gapX({ key, space }),
			[`.${e(`columns-gap-x-${key}`)}`]: gapY({ key, space }),
		};
	});

	addUtilities(gridStyles, ['responsive']);
	addUtilities(gridColumnStyles, ['responsive']);
	addUtilities(gridGapStyles, ['responsive']);
};

module.exports = createGridStyles;

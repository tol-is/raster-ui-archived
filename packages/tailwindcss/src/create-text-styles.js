var flattenDeep = require('lodash.flattendeep');
const { styleBaselineRel } = require('@styled-rhythm/core');

/**
 *
 *
 */
const createTextStyles = ({ theme, options, e, addUtilities }) => {
	// const fontConfig = Object.keys(options.fonts).reduce((res, curFamily) => {
	// 	const fonts = options.fonts[curFamily];
	// 	fonts.forEach(font => {
	// 		if (font.variable) {
	// 			res.push({
	// 				fontClassName: `${curFamily}-${font.key}}`,
	// 				...font,
	// 			});
	// 		} else {
	// 			res.push({
	// 				fontClassName: `${curFamily}-${font.weight}${font.italic ? 'i' : ''}`,
	// 				...font,
	// 			});
	// 		}
	// 	});
	// 	return res;
	// }, []);
	const familyStyles = options.fonts.map(font => {
		return {
			[`.font-${font.key}`]: {
				display: 'block',
				fontFamily: `"${font.familyName}", ${font.fallback}`,
				fontWeight: font.weight,
				fontStyle: font.italic ? 'italic' : 'normal',
			},
		};
	});

	const leading = Array.from(new Array(11), (v, i) => i);
	const sizeStyles = flattenDeep(
		options.fonts.map(font =>
			options.type.map((size, sizeIdx) => {
				return leading.map(lead => {
					return {
						[`.font-${font.key}`]: {
							[`&.${e(`type-${sizeIdx}/${lead}`)}`]: {
								...styleBaselineRel({
									font: font,
									root: options.root,
									baseline: options.baseline,
									fontSize: size,
									leading: lead,
								}),
							},
						},
					};
				});
			})
		)
	);
	addUtilities(familyStyles, []);
	addUtilities(sizeStyles, ['responsive']);
};

module.exports = createTextStyles;

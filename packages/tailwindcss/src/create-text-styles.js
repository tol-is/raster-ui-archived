var flattenDeep = require('lodash.flattendeep');

const styleBaselineRel = require('./style-baseline-rel');

/**
 *
 *
 */
const createTextStyles = ({ theme, options, e, addUtilities }) => {
	const fontConfig = Object.keys(options.fonts).reduce((res, curFamily) => {
		const fonts = options.fonts[curFamily];
		fonts.forEach((font) => {
			if (font.variable) {
				res.push({
					fontClassName: `${curFamily}-${font.key}}`,
					...font,
				});
			} else {
				res.push({
					fontClassName: `${curFamily}-${font.weight}${font.italic ? 'i' : ''}`,
					...font,
				});
			}
		});
		return res;
	}, []);

	const familyStyles = flattenDeep(
		fontConfig.map((font) => {
			return {
				[`.${e(font.fontClassName)}`]: {
					display: 'block',
					fontFamily: `"${font.familyName}", ${font.fallbackFamily}`,
					fontWeight: font.weight,
					fontStyle: font.italic ? 'italic' : 'normal',
				},
			};
		})
	);

	const leading = Array.from(new Array(11), (v, i) => i);

	const sizeStyles = flattenDeep(
		fontConfig.map((font) =>
			options.type.map((size, sizeIdx) => {
				return leading.map((lead) => {
					return {
						[`.${font.fontClassName}`]: {
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

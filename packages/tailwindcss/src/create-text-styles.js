var flattenDeep = require('lodash.flattendeep');
const {
	styleBaselineRel,
	styleBaseline,
	styleCapHeightRel,
	styleCapHeight,
	styleXHeightRel,
	styleXHeight,
} = require('@raster-ui/core');

/**
 *
 *
 */
const createTextStyles = ({ theme, options, e, addUtilities }) => {
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
					const outputBaseline = options.useRem
						? styleBaselineRel({
								font: font,
								root: options.root,
								baseline: options.baseline,
								size: size,
								leading: lead,
						  })
						: styleBaseline({
								font: font,
								baseline: options.baseline,
								size: size,
								leading: lead,
						  });

					const outputCapHeight = options.useRem
						? styleCapHeightRel({
								font: font,
								root: options.root,
								baseline: options.baseline,
								size: size,
								leading: lead,
						  })
						: styleCapHeight({
								font: font,
								baseline: options.baseline,
								size: size,
								leading: lead,
						  });

					const outputXHeight = options.useRem
						? styleXHeight({
								font: font,
								root: options.root,
								baseline: options.baseline,
								size: size,
								leading: lead,
						  })
						: styleXHeightRel({
								font: font,
								baseline: options.baseline,
								size: size,
								leading: lead,
						  });

					return {
						[`.font-${font.key}`]: {
							[`&.${e(
								`type-${sizeIdx}/${lead}`
							)}`]: outputBaseline,
							[`&.${e(
								`baseline-${sizeIdx}/${lead}`
							)}`]: outputBaseline,
							[`&.${e(
								`capheight-${sizeIdx}/${lead}`
							)}`]: outputCapHeight,
							[`&.${e(
								`xheight-${sizeIdx}/${lead}`
							)}`]: outputXHeight,
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

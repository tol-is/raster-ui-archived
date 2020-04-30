const { owlX, owlY } = require('@raster-ui/core');

/**
 *
 *
 */
const createOwlStyles = ({ theme, options, e, addUtilities }) => {
	const rhythmScale = theme('spacing');

	const owlStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`owl-${key}`)}`]: owlY({ key, space }),
			[`.${e(`owl-y-${key}`)}`]: owlY({ key, space }),
			[`.${e(`owl-x-${key}`)}`]: owlX({ key, space }),
		};
	});

	addUtilities(owlStyles, ['responsive']);
};

module.exports = createOwlStyles;

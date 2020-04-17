const { rhythm, rhythmY, rhythmX } = require('@raster-ui/core');

/**
 *
 *
 */
const createRhythmStyles = ({ theme, options, e, addUtilities }) => {
	const { baseline, root } = options;
	const rhythmScale = theme('spacing');

	const rhythmStyles = Object.keys(rhythmScale).map(key => {
		const space = rhythmScale[key];
		return {
			[`.${e(`rhythm-${key}`)}`]: rhythm({ key, space }),
			[`.${e(`rhythm-y-${key}`)}`]: rhythmY({ key, space }),
			[`.${e(`rhythm-x-${key}`)}`]: rhythmX({ key, space }),
		};
	});

	const baselineBgStyles = {
		[`.bg-baseline`]: {
			position: 'relative',
			backgroundRepeat: 'repeat',
			backgroundSize: `100% ${(baseline * 2) / root}rem`,
			backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) ${baseline / root}rem,
        transparent ${baseline / root}rem
        )`,
		},
	};

	addUtilities(rhythmStyles, ['responsive']);
	addUtilities(baselineBgStyles, []);
};

module.exports = createRhythmStyles;

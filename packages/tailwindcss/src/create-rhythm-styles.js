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
      [`.${e(`rhythm-${key}`)}`]: {
        [`& > * + * `]: {
          marginTop: space
        }
      },
      [`.${e(`rhythm-y-${key}`)}`]: {
        [`& > * + * `]: {
          marginTop: space
        }
      },
      [`.${e(`rhythm-x-${key}`)}`]: {
        [`& > * + * `]: {
          marginLeft: space
        }
      }
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
        )`
    }
  };

  addUtilities(rhythmStyles, [options.responsive ? 'responsive' : null]);
  addUtilities(baselineBgStyles, []);
};

module.exports = createRhythmStyles;

(function () {
// ASSET: style-baseline-rel.js
var $F8Po$exports = {};
/**
 *
 *
 */

const $F8Po$var$styleBaseline = ({
  font,
  baseline,
  root,
  fontSize,
  leading = 0
}) => {
  //
  const preventCollapse = 1; // cap height

  const capHeightRatio = font.capHeight / font.upm;
  const capSize = capHeightRatio * fontSize; // content box / round up baseline unit

  const typeRows = Math.ceil(capSize / baseline);
  const typeHeight = typeRows * baseline; // round leading

  const leadingRound = Math.round(leading); // if negative min value is typeRows

  const leadingValue = leadingRound < 0 ? Math.min(Math.abs(leadingRound), typeRows) * -1 : leadingRound; // leading height in px

  const leadingHeight = leadingValue * baseline; // line-height in px

  const lineHeight = typeHeight + leadingHeight; // crop white space top

  const negativeSpace = lineHeight - typeHeight;
  const cropHeight = negativeSpace - negativeSpace % baseline; // align to baseline

  const boundingBoxHeight = (font.ascent + Math.abs(font.descent)) / font.upm * fontSize;
  const descendHeight = Math.abs(font.descent / font.upm) * fontSize;
  const whiteSpaceHalf = (boundingBoxHeight - lineHeight) / 2;
  const baselineOffset = -1 * (whiteSpaceHalf - descendHeight);
  return {
    display: 'block',
    fontSize: `${fontSize / root}rem`,
    lineHeight: `${lineHeight / fontSize}`,
    transform: `translateY(${baselineOffset / fontSize}em)`,
    paddingTop: `${preventCollapse}px`,
    ['&:before']: {
      content: `''`,
      marginTop: `calc(${-(cropHeight + preventCollapse) / fontSize}em )`,
      display: 'block',
      height: 0
    }
  };
};

$F8Po$exports = $F8Po$var$styleBaseline;
// ASSET: create-text-styles.js
var $jAN8$exports = {};

function $jAN8$var$ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function $jAN8$var$_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      $jAN8$var$ownKeys(Object(source), true).forEach(function (key) {
        $jAN8$var$_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      $jAN8$var$ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function $jAN8$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var $jAN8$var$flattenDeep = require('lodash.flattendeep');

/**
 *
 *
 */
const $jAN8$var$createTextStyles = ({
  theme,
  options,
  e,
  addUtilities
}) => {
  const fontConfig = Object.keys(options.fonts).reduce((res, curFamily) => {
    const fonts = options.fonts[curFamily];
    fonts.forEach(font => {
      if (font.variable) {
        res.push($jAN8$var$_objectSpread({
          fontClassName: `${curFamily}-${font.key}}`
        }, font));
      } else {
        res.push($jAN8$var$_objectSpread({
          fontClassName: `${curFamily}-${font.weight}${font.italic ? 'i' : ''}`
        }, font));
      }
    });
    return res;
  }, []);
  const familyStyles = $jAN8$var$flattenDeep(fontConfig.map(font => {
    return {
      [`.${e(font.fontClassName)}`]: {
        display: 'block',
        fontFamily: `"${font.familyName}", ${font.fallbackFamily}`,
        fontWeight: font.weight,
        fontStyle: font.italic ? 'italic' : 'normal'
      }
    };
  }));
  const leading = Array.from(new Array(11), (v, i) => i);
  const sizeStyles = $jAN8$var$flattenDeep(fontConfig.map(font => options.typeScale.map((size, sizeIdx) => {
    return leading.map(lead => {
      return {
        [`.${font.fontClassName}`]: {
          [`&.${e(`type-${sizeIdx}/${lead}`)}`]: $jAN8$var$_objectSpread({}, $F8Po$exports({
            font: font,
            root: options.root,
            baseline: options.baseline,
            fontSize: size,
            leading: lead
          }))
        }
      };
    });
  })));
  addUtilities(familyStyles, []);
  addUtilities(sizeStyles, ['responsive']);
};

$jAN8$exports = $jAN8$var$createTextStyles;
// ASSET: create-measure-styles.js
var $jDWc$exports = {};

const $jDWc$var$createMeasureStyles = ({
  theme,
  options,
  e,
  addUtilities
}) => {
  const {
    measure
  } = options;
  const measureStyles = measure.map((space, idx) => {
    return {
      [`.${e(`measure-${idx}`)}`]: {
        maxWidth: `${space}ch`
      },
      [`.${e(`measure-min-${idx}`)}`]: {
        minWidth: `${space}ch`
      },
      [`.${e(`measure-max-${idx}`)}`]: {
        maxWidth: `${space}ch`
      }
    };
  });
  addUtilities(measureStyles, [options.responsive ? 'responsive' : null]);
};

$jDWc$exports = $jDWc$var$createMeasureStyles;
// ASSET: create-rhythm-styles.js
var $vbQM$exports = {};

const $vbQM$var$createRhythmStyles = ({
  theme,
  options,
  e,
  addUtilities
}) => {
  const {
    baseline,
    root
  } = options;
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
      backgroundSize: `100% ${baseline * 2 / root}rem`,
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

$vbQM$exports = $vbQM$var$createRhythmStyles;
// ASSET: create-columns-styles.js
var $veMt$exports = {};

var $veMt$var$flattenDeep = require('lodash.flattendeep');
/**
 *
 *
 */


const $veMt$var$createGridStyles = ({
  theme,
  options,
  e,
  addUtilities
}) => {
  const columns = Array.from(new Array(24 + 1), (v, i) => i);
  const gridStyles = columns.map(columnIndex => {
    const columnIndexValue = columnIndex === 0 ? 1 : columnIndex;
    return {
      [`.${e(`columns-${columnIndex}`)}`]: {
        display: 'grid',
        gridTemplateColumns: `repeat(${columnIndexValue}, minmax(0,1fr))`,
        [`& > * `]: {
          gridColumn: 'span 1'
        }
      }
    };
  });
  const gridColumnStyles = $veMt$var$flattenDeep(columns.map(startIndex => {
    return columns.map(endIndex => {
      if (startIndex + endIndex > columns.length) return null;
      if (endIndex === 0) return null;
      const startIndexValue = startIndex === 0 ? 1 : startIndex;
      return {
        [`.${e(`col-${startIndex}/${endIndex}`)}`]: {
          gridColumn: `${startIndexValue} / span ${endIndex}`
        }
      };
    });
  })).filter(Boolean);
  const gridRowStyles = $veMt$var$flattenDeep(columns.map(startIndex => {
    return columns.map(endIndex => {
      if (endIndex === 0) return null;
      const startIndexValue = startIndex === 0 ? 1 : startIndex;
      return {
        [`.${e(`row-${startIndex}/${endIndex}`)}`]: {
          gridRow: `${startIndexValue} / span ${endIndex}`
        }
      };
    });
  })).filter(Boolean);
  const rhythmScale = theme('spacing');
  const gridGapStyles = Object.keys(rhythmScale).map(key => {
    const space = rhythmScale[key];
    return {
      [`.${e(`columns-gap-${key}`)}`]: {
        gridRowGap: space,
        gridColumnGap: space
      },
      [`.${e(`columns-gap-y-${key}`)}`]: {
        gridRowGap: space
      },
      [`.${e(`columns-gap-x-${key}`)}`]: {
        gridColumnGap: space
      }
    };
  });
  addUtilities(gridStyles, [options.responsive ? 'responsive' : null]);
  addUtilities(gridColumnStyles, [options.responsive ? 'responsive' : null]);
  addUtilities(gridRowStyles, [options.responsive ? 'responsive' : null]);
  addUtilities(gridGapStyles, [options.responsive ? 'responsive' : null]);
};

$veMt$exports = $veMt$var$createGridStyles;
// ASSET: tailwind-plugin.js
var $CDWS$exports = {};

const $CDWS$var$tailwindPlugin = (options = {}) => {
  return ({
    theme,
    e,
    addUtilities,
    config
  }) => {
    $jAN8$exports({
      theme,
      options,
      e,
      addUtilities
    });
    $vbQM$exports({
      theme,
      options,
      e,
      addUtilities
    });
    $veMt$exports({
      theme,
      options,
      e,
      addUtilities
    });
    $jDWc$exports({
      theme,
      options,
      e,
      addUtilities
    });
  };
};

$CDWS$exports = $CDWS$var$tailwindPlugin;
// ASSET: tailwind-compositor.js
var $cLYv$exports = {}; // const { scaleToRem } = require('./utils/scale-to-rem');

const $cLYv$var$compositor = styledTheme => tailwindConfig => {
  const styledConfig = {};
  return styledConfig;
};

$cLYv$exports = $cLYv$var$compositor;
// ASSET: index.js
var $Focm$exports = {};
$Focm$exports.tailwindCompositor = $cLYv$exports;
$Focm$exports.tailwindPlugin = $CDWS$exports;
$Focm$exports = $cLYv$exports;

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $Focm$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $Focm$exports;
  });
}
})();
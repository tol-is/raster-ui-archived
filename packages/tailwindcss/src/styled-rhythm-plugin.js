const createTextStyles = require('./create-text-styles');
const createMeasureStyles = require('./create-measure-styles');
const createRhythmStyles = require('./create-rhythm-styles');
const createColumnsStyles = require('./create-columns-styles');

const tailwindPlugin = (options = {}) => {
	return ({ theme, e, addUtilities, config }) => {
		createTextStyles({ theme, options, e, addUtilities });
		createRhythmStyles({ theme, options, e, addUtilities });
		createColumnsStyles({ theme, options, e, addUtilities });
		createMeasureStyles({ theme, options, e, addUtilities });
	};
};

module.exports = tailwindPlugin;

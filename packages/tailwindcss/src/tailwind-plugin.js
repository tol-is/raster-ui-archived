const createTextStyles = require('./create-text-styles');
const createMeasureStyles = require('./create-measure-styles');
const createOwlStyles = require('./create-owl-styles');
const createMatrixStyles = require('./create-matrix-styles');
const createBackgroundStyles = require('./create-background-styles');

const tailwindPlugin = (options = {}) => {
	return ({ theme, e, addUtilities, config }) => {
		createTextStyles({ theme, options, e, addUtilities });
		createMeasureStyles({ theme, options, e, addUtilities });
		createOwlStyles({ theme, options, e, addUtilities });
		createMatrixStyles({ theme, options, e, addUtilities });
		createBackgroundStyles({ theme, options, e, addUtilities });
	};
};

module.exports = tailwindPlugin;

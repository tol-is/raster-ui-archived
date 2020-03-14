const postcssJs = require('postcss-js');

export default (rule, style) => {
	rule.before(postcssJs.parse(style));
	rule.remove();
};

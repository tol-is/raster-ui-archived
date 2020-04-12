const postcssJs = require('postcss-js');

export default (rule, style) => {
	const cssStyle = postcssJs.parse(style);
	rule.before(cssStyle);
	rule.remove();
};

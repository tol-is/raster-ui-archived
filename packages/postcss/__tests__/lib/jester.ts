const theme = require('@styled-rhythm/theme-test');
const { stripcss } = require('@styled-rhythm/utils');

const postcss = require('postcss');
const styledRhythmPostcss = require('../../dist/index').default;

const createPostCSSConfig = (pluginOptions = {}, input) => {
	return postcss([styledRhythmPostcss(pluginOptions)])
		.process(input, {
			from: undefined,
		})
		.then(({ css }) => {
			return css;
		});
};

export const matcher = (input, result) =>
	createPostCSSConfig(theme, input).then(css => {
		expect(stripcss(css)).toBe(stripcss(result));
	});

export const logger = input =>
	createPostCSSConfig(theme, input).then(css => {
		console.log(css);
		expect(true).toBe(true);
	});

export default matcher;

const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const rhythmPlugin = require('./dist/index').default;

console.log(postcss, rhythmPlugin);

expect.extend({
	toMatchCss: cssMatcher,
});

const createPostCSSConfig = (pluginOptions = {}) => {
	return postcss([rhythmPlugin(pluginOptions)])
		.process(
			`
			.stack {
				@rhythm 5;
			}
			.columns {
				@columns 3;
			}
			.heading {
				@type sans-400i 14/5;
				@measure 2;
			}
		`,
			{
				from: undefined,
			}
		)
		.then(({ css }) => {
			return css;
		});
};

test('runs', () => {
	return createPostCSSConfig({
		root: 16,
		baseline: 8,
		typeScale: [16, 18, 20, 24],
		rhythmScale: [0, 1, 2, 4],
	}).then(css => {
		expect(true).toBe(true);
	});
});

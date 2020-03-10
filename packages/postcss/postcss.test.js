const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const rhythmPlugin = require('./dist/index').default;

console.log(rhythmPlugin);

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
		responsive: true,
		baseline: 8,
		leadMax: 0,
		typeScale: [10, 12],
		rhythmScale: [0, 1],
	}).then(css => {
		console.log(css);
		expect(true).toBe(true);
	});
});

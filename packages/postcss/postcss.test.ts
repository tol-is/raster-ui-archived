const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const styledRhythmPostcss = require('./dist/index').default;

// console.log(postcss, rhythmPlugin);

expect.extend({
	toMatchCss: cssMatcher,
});

const createPostCSSConfig = (pluginOptions = {}) => {
	return postcss([styledRhythmPostcss(pluginOptions)])
		.process(
			`
			.stack {
				@rhythm 3;
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
		type: [16, 18, 20, 24],
		rhythm: [0, 1, 2, 4],
	}).then(css => {
		console.log(css);
		expect(true).toBe(true);
	});
});
// .columns {
// 	@columns 3;
// }
// .baseline {
// 	@baseline sans-400i 14/5;
// }
// .caps {
// 	@caps sans-400i 14/5;
// }
// .xheight {
// 	@xheight sans-400i 14/5;
// }
// .measure {
// 	@measure 2;
// }

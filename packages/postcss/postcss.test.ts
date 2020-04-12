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
				rhythm: 3;
			}

			.stack-x {
				rhythm-x: 3;
			}

			.stack-y {
				rhythm-y: 3;
			}

			.length {
				measure: 12rem;
			}

			.length-min {
				measure-min: 3;
			}

			.length-max {
				measure-max: 3;
			}

			.raster{
				columns: 5;
				columns-gap: 3;
			}

			.raster-x{
				matrix: 5;
				matrix-gap-x: 3;
			}

			.raster-y{
				matrix: 5;
				matrix-gap-y: 3;
			}

			.raster-cell {
				cell: 1/4;
			}

			.raster-cell {
				cell: 3;
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
		measure: [16, 18, 20, 24],
		rhythm: [0, 1, 2, 4],
	}).then(css => {
		// console.log(css);
		expect(true).toBe(true);
	});
});

import { matcher, logger } from './lib/jester';

test('typography-family', () => {
	const input = `
	.typography-font-size {
		font: sans-400;
	}`;

	logger(input);
});

test('typography-family-size', () => {
	const input = `
	.typography-font-size {
		font: sans-400 14/4;
	}`;

	logger(input);
});

test('typography-family-size-no-lead', () => {
	const input = `
	.typography-font-size-no-lead {
		font: sans-400 14;
	}`;

	logger(input);
});

test('typography-family-size-baseline', () => {
	const input = `
	.typography-font-size-no-lead {
		font: sans-400 14/4 baseline;
	}`;

	logger(input);
});

test('typography-family-size-capheight', () => {
	const input = `
	.typography-font-size-no-lead {
		font: sans-400 14/4 capheight;
	}`;

	logger(input);
});

import { matcher } from './lib/jester';

/**
 *
 */
test('multiprop', () => {
	const input = `
	.margin {
		margin: 0 1 2 3;
	}`;

	const result = `
	.margin {
		margin: 0rem 1rem 2rem 3rem;
	}`;

	matcher(input, result);
});

/**
 *
 */
test('single prop', () => {
	const input = `
	.mt {
		margin-top: 1;
	}`;

	const result = `
	.mt {
		margin-top: 1rem;
	}`;

	matcher(input, result);
});

/**
 *
 */
test('custom prop', () => {
	const input = `
	.mt {
		margin-top: 4px;
	}`;

	const result = `
	.mt {
		margin-top: 4px;
	}`;

	matcher(input, result);
});

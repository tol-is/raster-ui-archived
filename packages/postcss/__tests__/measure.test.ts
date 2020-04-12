import { matcher } from './lib/jester';

/**
 *
 */
test('measure-auto', () => {
	const input = `
	.measure {
		measure: 0;
	}`;

	const result = `
	.measure {
		max-width: auto;
	}`;

	matcher(input, result);
});

/**
 *
 */
test('measure-1', () => {
	const input = `
	.measure {
		measure: 1;
	}`;

	const result = `
	.measure {
		max-width: 10ch;
	}`;

	matcher(input, result);
});

/**
 *
 */
test('measure-min', () => {
	const input = `
	.measure {
		measure-min: 1;
	}`;

	const result = `
	.measure {
		min-width: 10ch;
	}`;

	matcher(input, result);
});

/**
 *
 */
test('measure-max', () => {
	const input = `
	.measure {
		measure-max: 2;
	}`;

	const result = `
	.measure {
		max-width: 20ch;
	}`;

	matcher(input, result);
});

/**
 *
 */
test('measure-custom', () => {
	const input = `
	.measure {
		measure: 32ch;
	}`;

	const result = `
	.measure {
		max-width: 32ch;
	}`;

	matcher(input, result);
});

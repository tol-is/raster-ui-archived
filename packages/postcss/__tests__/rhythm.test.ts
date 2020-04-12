import { matcher } from './lib/jester';

/**
 *
 */
test('rhythm', () => {
	const input = `
	.stack {
		rhythm: 2;
	}`;

	const result = `
	.stack {
		& > * + *  {
			margin-top: 2rem;
		}
	}`;

	matcher(input, result);
});

/**
 *
 */
test('rhythm-custom', () => {
	const input = `
	.stack {
		rhythm: 24px;
	}`;

	const result = `
	.stack {
		& > * + *  {
			margin-top: 24px;
		}
	}`;

	matcher(input, result);
});

/**
 *
 */
test('rhythm-x', () => {
	const input = `
	.row {
		rhythm-x: 2;
	}`;

	const result = `
	.row {
		& > * + *  {
			margin-left: 2rem;
		}
	}`;

	matcher(input, result);
});

/**
 *
 */
test('rhythm-y', () => {
	const input = `
	.stack {
		rhythm-y: 2;
	}`;

	const result = `
	.stack {
		& > * + *  {
			margin-top: 2rem;
		}
	}`;

	matcher(input, result);
});

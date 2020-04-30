import { matcher } from './lib/jester';

/**
 *
 */
test('rhythm', () => {
	const input = `
	.stack {
		owl: 2;
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
		owl: 24px;
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
		owl-x: 2;
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
		owl-y: 2;
	}`;

	const result = `
	.stack {
		& > * + *  {
			margin-top: 2rem;
		}
	}`;

	matcher(input, result);
});

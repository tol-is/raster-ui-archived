import { matcher } from './lib/jester';

/**
 *
 */
test('matrix', () => {
	const input = `
	.grid {
		matrix: 2;
	}`;

	const result = `
	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0,1fr));
		& > *  {
				grid-column: span 1
		}
	}`;

	matcher(input, result);
});

/**
 *
 */
test('cell', () => {
	const input = `
	.matrix-cell {
		cell: 1/3;
	}`;

	const result = `
	.matrix-cell {
		grid-column: 1 / span 3;
	}`;

	matcher(input, result);
});

test('cell-only-span', () => {
	const input = `
		.matrix-cell {
			cell: 3;
		}`;
	const result = `
		.grid-cell {
			grid-column: span 3;
		}`;

	matcher(input, result);
});

test('raster-gap', () => {
	const input = `
		.grid {
			matrix-gap: 2;
		}`;

	const result = `
		.grid {
			grid-row-gap: 2rem;
			grid-column-gap: 2rem;
		}`;

	matcher(input, result);
});

test('raster-gap-custom', () => {
	const input = `
		.grid {
			matrix-gap: 23px;
		}`;

	const result = `
		.grid {
			grid-row-gap: 23px;
			grid-column-gap: 23px;
		}`;

	matcher(input, result);
});

test('raster-gap-x', () => {
	const input = `
	.grid {
		matrix-gap-x: 2;
	}`;

	const result = `
		.grid {
			grid-column-gap: 2rem;
		}`;

	matcher(input, result);
});

test('raster-gap-y', () => {
	const input = `
	.grid {
		matrix-gap-y: 2;
	}`;

	const result = `
		.grid {
			grid-row-gap: 2rem;
		}`;

	matcher(input, result);
});

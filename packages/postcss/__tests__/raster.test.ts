import { matcher } from './lib/jester';

/**
 *
 */
test('raster', () => {
	const input = `
	.raster {
		raster: 2;
	}`;

	const result = `
	.raster {
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
	.cell {
		cell: 1/3;
	}`;

	const result = `
	.cell {
		grid-column: 1 / span 3;
	}`;

	matcher(input, result);
});

test('cell-only-span', () => {
	const input = `
		.cell {
			cell: 3;
		}`;
	const result = `
		.cell {
			grid-column: span 3;
		}`;

	matcher(input, result);
});

test('raster-gap', () => {
	const input = `
		.raster {
			raster-gap: 2;
		}`;

	const result = `
		.raster {
			grid-row-gap: 2rem;
			grid-column-gap: 2rem;
		}`;

	matcher(input, result);
});

test('raster-gap-custom', () => {
	const input = `
		.raster {
			raster-gap: 23px;
		}`;

	const result = `
		.raster {
			grid-row-gap: 23px;
			grid-column-gap: 23px;
		}`;

	matcher(input, result);
});

test('raster-gap-x', () => {
	const input = `
	.raster {
		raster-gap-x: 2;
	}`;

	const result = `
		.raster {
			grid-column-gap: 2rem;
		}`;

	matcher(input, result);
});

test('raster-gap-y', () => {
	const input = `
	.raster {
		raster-gap-y: 2;
	}`;

	const result = `
		.raster {
			grid-row-gap: 2rem;
		}`;

	matcher(input, result);
});

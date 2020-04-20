import { matcher, logger } from './lib/jester';

// grid: 12/5 8/4;
// grid: 12 8;
// grid: 12

test('matrix', () => {
	const input = `
	.matrix {
		matrix: 12;
	}`;
	logger(input);
});

test('matrix', () => {
	const input = `
	.matrix {
		matrix: 12 4;
	}`;
	logger(input);
});

test('matrix', () => {
	const input = `
	.matrix {
		matrix: 12/4 4;
	}`;
	logger(input);
});

test('matrix', () => {
	const input = `
	.matrix {
		matrix: 12/4 4/4;
	}`;
	logger(input);
});

test('matrix', () => {
	const input = `
	.matrix {
		matrix: 12/4 auto;
	}`;
	logger(input);
});
// /**
//  *
//  */
// test('matrix', () => {
// 	const input = `
// 	.matrix {
// 		matrix: 2;
// 	}`;

// 	const result = `
// 	.matrix {
// 		display: grid;
// 		grid-template-columns: repeat(2, minmax(0,1fr));
// 		& > *  {
// 				grid-column: span 1
// 		}
// 	}`;

// 	matcher(input, result);
// });

// /**
//  *
//  */
// test('cell', () => {
// 	const input = `
// 	.matrix-cell {
// 		matrix-cell: 1/3;
// 	}`;

// 	const result = `
// 	.matrix-cell {
// 		grid-column: 1 / span 3;
// 	}`;

// 	matcher(input, result);
// });

// test('cell-only-span', () => {
// 	const input = `
// 		.matrix-cell {
// 			matrix-cell: 3;
// 		}`;
// 	const result = `
// 		.matrix-cell {
// 			grid-column: span 3;
// 		}`;

// 	matcher(input, result);
// });

// test('raster-gap', () => {
// 	const input = `
// 		.matrix {
// 			matrix-gap: 2;
// 		}`;

// 	const result = `
// 		.matrix {
// 			grid-row-gap: 2rem;
// 			grid-column-gap: 2rem;
// 		}`;

// 	matcher(input, result);
// });

// test('raster-gap-custom', () => {
// 	const input = `
// 		.matrix {
// 			matrix-gap: 23px;
// 		}`;

// 	const result = `
// 		.matrix {
// 			grid-row-gap: 23px;
// 			grid-column-gap: 23px;
// 		}`;

// 	matcher(input, result);
// });

// test('raster-gap-x', () => {
// 	const input = `
// 	.matrix {
// 		matrix-gap-x: 2;
// 	}`;

// 	const result = `
// 		.matrix {
// 			grid-column-gap: 2rem;
// 		}`;

// 	matcher(input, result);
// });

// test('raster-gap-y', () => {
// 	const input = `
// 	.matrix {
// 		matrix-gap-y: 2;
// 	}`;

// 	const result = `
// 		.matrix {
// 			grid-row-gap: 2rem;
// 		}`;

// 	matcher(input, result);
// });

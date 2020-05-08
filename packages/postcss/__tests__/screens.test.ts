import { matcher, logger } from './lib/jester';

// grid: 12/5 8/4;
// grid: 12 8;
// grid: 12

test('matrix', () => {
	const input = `
	.potato {
		margin-top: 1;
		@screen lg {
			margin-top: 3;
		}
	}`;
	logger(input);
});

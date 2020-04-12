import replace from './replace-rule';
import { get, is } from '@styled-rhythm/utils';
const { columns, column, gap, gapX, gapY } = require('@styled-rhythm/core');

export const columnsPlugin = (css, theme, result) => {
	css.walkDecls(decl => {
		const { prop, value } = decl;
		if (prop === 'matrix') {
			replace(decl, columns({ count: value }));
		}

		if (prop === 'cell') {
			const [first, second] = value.split('/');

			let start = first;
			let span = second;
			if (!is.exists(second)) {
				start = 1;
				span = first;
			}
			console.log(start, span);
			// const length = get(theme.measure, value, value);
			// replace(decl, column({ length }));
		}

		// grid-column: 1 / 2;

		if (prop === 'matrix-gap') {
			const space = get(theme.rhythm, value, value);
			replace(decl, gap({ space }));
		}

		if (prop === 'matrix-gap-x') {
			const space = get(theme.rhythm, value, value);
			replace(decl, gapX({ space }));
		}

		if (prop === 'matrix-gap-y') {
			const space = get(theme.rhythm, value, value);
			replace(decl, gapY({ space }));
		}
	});
};

// export const columns = ({ count }: { count: Number }): Style => {
// 	return {
// 		display: 'grid',
// 		gridTemplateColumns: `repeat(${count}, minmax(0,1fr))`,
// 		[`& > * `]: {
// 			gridColumn: 'span 1',
// 		},
// 	};
// };

// export const column = ({ start, span }: { start: Number; span: Number }): Style => {
// 	return {
// 		gridColumn: `${start} / span ${span}`,
// 	};
// };

// export const gap = ({ space }: { space: string }): Style => {
// 	return {
// 		gridRowGap: space,
// 		gridColumnGap: space,
// 	};
// };

// export const gapX = ({ space }: { space: string }): Style => {
// 	return {
// 		gridColumnGap: space,
// 	};
// };

// export const gapY = ({ space }: { space: string }): Style => {
// 	return {
// 		gridRowGap: space,
// 	};

export default columnsPlugin;

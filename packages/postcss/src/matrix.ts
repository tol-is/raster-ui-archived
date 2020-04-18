import { Theme } from '@raster-ui/types';
import { get, is, pxToRem } from '@raster-ui/utils';
import {
	gridMatrix,
	gridMatrixCell,
	gridMatrixGap,
	gridMatrixGapX,
	gridMatrixGapY,
} from '@raster-ui/core';

import replace from './lib/replace-rule';
import getRhythm from './lib/get-rhythm';

export const rasterPlugin = (css: any, theme: Theme, result: any) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (prop === 'matrix') {
			replace(decl, gridMatrix({ columns: value }));
			return;
		}

		if (prop === 'matrix-cell') {
			const [first, second] = value.split('/');

			let start = first;
			let span = second;
			if (!is.exists(second)) {
				start = undefined;
				span = first;
			}
			replace(decl, gridMatrixCell({ start, span }));
			return;
		}

		if (prop === 'matrix-gap') {
			replace(decl, gridMatrixGap({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'matrix-gap-x') {
			replace(decl, gridMatrixGapX({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'matrix-gap-y') {
			replace(decl, gridMatrixGapY({ space: getRhythmValue(value) }));
			return;
		}
	});
};

export default rasterPlugin;

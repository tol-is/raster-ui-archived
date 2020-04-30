import { Theme } from '@raster-ui/types';
import { get, is, pxToRem, getRhythm } from '@raster-ui/utils';
import {
	gridMatrix,
	gridMatrixColumns,
	gridMatrixRows,
	gridMatrixCell,
	gridMatrixGap,
	gridMatrixGapX,
	gridMatrixGapY,
} from '@raster-ui/core';

// 12/3 cols/gap

// 12 3/4 cols gap/gap

// 12/3 5/3

import replace from './lib/replace-rule';

export const rasterPlugin = (css: any, theme: Theme, result: any) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (prop === 'matrix') {
			const [xParams = '', yParams = ''] = value.split(' ');

			const [columns, gapX] = xParams.split('/').map(v => parseInt(v));

			let [rhythm, gapY] = yParams.split('/').map(v => parseInt(v));

			// if
			if (is.exists(rhythm) && !is.exists(gapY)) {
				gapY = rhythm;
				rhythm = null;
			}

			const styleParams: any = {};

			if (is.exists(columns)) {
				styleParams.columns = columns;
			}
			if (is.exists(rhythm)) {
				styleParams.rhythm = getRhythmValue(rhythm);
			}
			if (is.exists(gapX)) {
				styleParams.gapX = getRhythmValue(gapX);
			}
			if (is.exists(gapY)) {
				styleParams.gapY = getRhythmValue(gapY);
			}

			replace(decl, gridMatrix(styleParams));
			return;
		}

		if (prop === 'matrix-columns') {
			replace(decl, gridMatrixColumns({ columns: value }));
			return;
		}

		if (prop === 'matrix-row-height') {
			const rhythmValue = getRhythmValue(value);

			replace(decl, gridMatrixRows({ rhythm: rhythmValue }));
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

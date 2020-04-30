import { Theme } from '@raster-ui/types';
import { get, is, pxToRem } from '@raster-ui/utils';
import {
	gridMatrix,
	gridMatrixColumns,
	gridMatrixRows,
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
			const [xParams = '', yParams = ''] = value.split(' ');

			const [columns, gapX = false] = xParams
				.split('/')
				.map(v => parseInt(v));

			const [rhythm = false, gapY = false] = yParams
				.split('/')
				.map(v => parseInt(v));

			const styleParams: any = {};

			console.log(value);

			if (is.num(columns)) {
				styleParams.columns = columns;
			}
			if (is.num(columns)) {
				styleParams.rhythm = getRhythmValue(rhythm);
			}
			if (is.num(gapX)) {
				styleParams.gapX = getRhythmValue(gapX);
			}
			if (is.num(gapY)) {
				styleParams.gapY = getRhythmValue(gapY);
			}

			replace(decl, gridMatrix(styleParams));
			return;
		}

		if (prop === 'matrix-columns') {
			replace(decl, gridMatrixColumns({ columns: value }));
			return;
		}

		if (prop === 'matrix-rows') {
			const rhythmValue = getRhythmValue(value);

			console.log(value, rhythmValue);

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

import { Theme } from '@raster-ui/types';
import { get, is, pxToRem } from '@raster-ui/utils';
import {
	gridRaster,
	gridCell,
	gridGap,
	gridGapX,
	gridGapY,
} from '@raster-ui/core';

import replace from './lib/replace-rule';
import getRhythm from './lib/get-rhythm';


export const rasterPlugin = (css: any, theme: Theme, result: any) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (prop === 'grid-raster') {
			replace(decl, gridRaster({ columns: value }));
			return;
		}

		if (prop === 'grid-cell') {
			const [first, second] = value.split('/');

			let start = first;
			let span = second;
			if (!is.exists(second)) {
				start = undefined;
				span = first;
			}
			replace(decl, gridCell({ start, span }));
			return;
		}

		if (prop === 'grid-gap') {
			replace(decl, gridGap({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'grid-gap-x') {
			replace(decl, gridGapX({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'grid-gap-y') {
			replace(decl, gridGapY({ space: getRhythmValue(value) }));
			return;
		}
	});
};

export default rasterPlugin;

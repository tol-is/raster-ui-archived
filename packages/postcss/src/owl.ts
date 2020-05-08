import { Theme } from '@raster-ui/types';
import { owlX, owlY } from '@raster-ui/core';
import { getRhythm } from '@raster-ui/utils';

import replace from './lib/replace-rule';

export const owlPlugin = (css: any, theme: Theme) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (prop === 'owl') {
			replace(decl, owlY({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'owl-x') {
			replace(decl, owlX({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'owl-y') {
			replace(decl, owlY({ space: getRhythmValue(value) }));
			return;
		}
	});
};

export default owlPlugin;

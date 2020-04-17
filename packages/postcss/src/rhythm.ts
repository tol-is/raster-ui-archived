import { Theme } from '@raster-ui/types';
import {
	rhythm as rhythmFn,
	rhythmY as rhythmYFn,
	rhythmX as rhythmXFn,
} from '@raster-ui/core';

import replace from './lib/replace-rule';
import getRhythm from './lib/get-rhythm';

export const rhythmPlugin = (css: any, theme: Theme) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (prop === 'rhythm') {
			replace(decl, rhythmFn({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'rhythm-x') {
			replace(decl, rhythmXFn({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'rhythm-y') {
			replace(decl, rhythmYFn({ space: getRhythmValue(value) }));
			return;
		}
	});
};

export default rhythmPlugin;

import { Theme } from '@styled-rhythm/types';
import {
	rhythm as rhythmFn,
	rhythmY as rhythmYFn,
	rhythmX as rhythmXFn,
} from '@styled-rhythm/core';
import { is, get, pxToRem } from '@styled-rhythm/utils';

import replace from './lib/replace-rule';

export const rhythmPlugin = (css: any, theme: Theme) => {
	//
	const { root, baseline } = theme;
	const toRootEm = pxToRem(root);
	//
	const getRhythmValue = value => {
		const scaleValue = get(theme.rhythm, value, value);

		const styleValue = is.num(scaleValue)
			? `${toRootEm(scaleValue * baseline)}rem`
			: scaleValue;

		return styleValue;
	};

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

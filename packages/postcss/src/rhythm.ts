import replace from './replace-rule';
import { get } from '@styled-rhythm/utils';
const { rhythm, rhythmY, rhythmX } = require('@styled-rhythm/core');

export const rhythmPlugin = (css, theme, result) => {
	css.walkDecls(decl => {
		const { prop, value } = decl;
		if (prop === 'rhythm') {
			const space = get(theme.rhythm, value, value);
			replace(decl, rhythm({ space }));
		} else if (prop === 'rhythm-x') {
			const space = get(theme.rhythm, value, value);
			replace(decl, rhythmX({ space }));
		} else if (prop === 'rhythm-y') {
			const space = get(theme.rhythm, value, value);
			replace(decl, rhythmY({ space }));
		}
	});
};

export default rhythmPlugin;

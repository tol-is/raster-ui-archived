import replace from './replace-rule';
import { get } from '@styled-rhythm/utils';
const { measure, measureMin, measureMax } = require('@styled-rhythm/core');

export const measurePlugin = (css, theme, result) => {
	css.walkDecls(decl => {
		const { prop, value } = decl;
		if (prop === 'measure') {
			const length = get(theme.measure, value, value);
			replace(decl, measure({ length }));
		} else if (prop === 'measure-min') {
			const length = get(theme.measure, value, value);
			replace(decl, measureMin({ length }));
		} else if (prop === 'measure-max') {
			const length = get(theme.measure, value, value);
			replace(decl, measureMax({ length }));
		}
	});
};

export default measurePlugin;

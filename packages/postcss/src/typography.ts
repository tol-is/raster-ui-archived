import {
	styleFontFamily,
	styleBaselineRel,
	styleBaseline,
} from '@raster-system/core';

import { Theme } from '@raster-system/types';
import { is } from '@raster-system/utils';
import replace from './lib/replace-rule';

export const typePlugin = (css: any, theme: Theme, result: any) => {
	const { relative, baseline, root, fonts } = theme;
	css.walkDecls(decl => {
		const { prop, value } = decl;

		// matches font size eg. 13 or size/leading 12/3
		// const sizeRegEx = RegExp('^[0-9]+([/]?[0-9]+)?$', 'g');

		if (prop === 'font') {
			const [family, fontSize, format = 'baseline'] = value.split(' ');

			const font = fonts.find(f => f.key === family);

			if (!is.exists(fontSize)) {
				replace(decl, styleFontFamily({ font }));
				return;
			}

			const [size, leading = 0] = fontSize.split('/');

			if (relative && format === 'baseline') {
				replace(
					decl,
					styleBaselineRel({
						font,
						size,
						leading,
						baseline,
						root,
					})
				);
				return;
			}

			if (!relative && format === 'baseline') {
				replace(
					decl,
					styleBaseline({
						font,
						leading,
						baseline,
						size,
					})
				);
				return;
			}
		}
	});
};

export default typePlugin;

import {
	styleFontFamily,
	styleBaselineRel,
	styleBaseline,
	styleXHeightRel,
	styleCapHeightRel,
	styleCapHeight,
	styleXHeight,
} from '@raster-ui/core';

import { Theme } from '@raster-ui/types';
import { is, get } from '@raster-ui/utils';
import replace from './lib/replace-rule';

export const typePlugin = (css: any, theme: Theme, result: any) => {
	const { relative, baseline, root, fonts } = theme;
	css.walkDecls(decl => {
		const { prop, value } = decl;

		// matches font size eg. 13 or size/leading 12/3
		// const sizeRegEx = RegExp('^[0-9]+([/]?[0-9]+)?$', 'g');

		if (prop === 'font') {
			const [family, type, format = 'baseline'] = value.split(' ');

			const font = fonts.find(f => f.key === family);

			if (!is.exists(type)) {
				replace(decl, styleFontFamily({ font }));
				return;
			}

			const [fontSize, leading = 0] = type.split('/');

			const size = get(theme.type, fontSize, fontSize);

			if (format === 'baseline') {
				if (relative) {
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
				} else {
					replace(
						decl,
						styleBaseline({
							font,
							leading,
							baseline,
							size,
						})
					);
				}
				return;
			}

			if (format === 'capheight') {
				if (relative) {
					replace(
						decl,
						styleCapHeightRel({
							font,
							size,
							leading,
							baseline,
							root,
						})
					);
				} else {
					replace(
						decl,
						styleCapHeight({
							font,
							leading,
							baseline,
							size,
						})
					);
				}
				return;
			}

			if (format === 'xheight') {
				if (relative) {
					replace(
						decl,
						styleXHeightRel({
							font,
							size,
							leading,
							baseline,
							root,
						})
					);
				} else {
					replace(
						decl,
						styleXHeight({
							font,
							leading,
							baseline,
							size,
						})
					);
				}
				return;
			}
		}
	});
};

export default typePlugin;

import { Theme } from '@raster-system/types';

import replace from './lib/replace-rule';
import getRhythm from './lib/get-rhythm';

const spaceProps = [
	'margin',
	'padding',
	'margin-top',
	'margin-bottom',
	'margin-left',
	'margin-right',
	'margin-x',
	'margin-y',
	'padding-top',
	'padding-bottom',
	'padding-left',
	'padding-right',
	'padding-x',
	'padding-y',
];

export const rasterPlugin = (css: any, theme: Theme, result: any) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (spaceProps.includes(prop)) {
			const cssValue = value
				.split(' ')
				.map(v => getRhythmValue(v))
				.join(' ');

			replace(decl, {
				[prop]: getRhythmValue(cssValue),
			});
			return;
		}
	});
};

export default rasterPlugin;

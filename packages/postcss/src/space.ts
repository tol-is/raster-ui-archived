import { Theme } from '@raster-ui/types';
import { getRhythm } from '@raster-ui/utils';

import replace from './lib/replace-rule';

const spaceProps = [
	'height',
	'min-height',
	'max-height',
	'width',
	'min-width',
	'max-width',
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

export const spacePlugin = (css: any, theme: Theme, result: any) => {
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
				[prop]: cssValue,
			});
			return;
		}
	});
};

export default spacePlugin;

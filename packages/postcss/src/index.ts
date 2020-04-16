import postcss from 'postcss';
import { Theme } from '@styled-rhythm/types';

import type from './typography';
import rhythm from './rhythm';
import measure from './measure';
import matrix from './matrix';

const plugins = [type, rhythm, measure, matrix];

const rhythmPlugin = postcss.plugin('styled-rhythm', (theme: Theme) => {
	return (css, result) => {
		plugins.forEach(plugin => {
			plugin(css, theme, result);
		});
	};
});

export default rhythmPlugin;

import postcss from 'postcss';
import { Theme } from '@raster-ui/types';

import type from './typography';
import owl from './owl';
import measure from './measure';
import matrix from './matrix';
import space from './space';

const plugins = [type, owl, measure, matrix, space];

const rhythmPlugin = postcss.plugin('raster-ui', (theme: Theme) => {
	return (css, result) => {
		plugins.forEach(plugin => {
			plugin(css, theme, result);
		});
	};
});

export default rhythmPlugin;

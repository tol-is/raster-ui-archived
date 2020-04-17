import postcss from 'postcss';
import { Theme } from '@raster-ui/types';

import type from './typography';
import rhythm from './rhythm';
import measure from './measure';
import raster from './raster';

const plugins = [type, rhythm, measure, raster];

const rhythmPlugin = postcss.plugin('raster-ui', (theme: Theme) => {
	return (css, result) => {
		plugins.forEach(plugin => {
			plugin(css, theme, result);
		});
	};
});

export default rhythmPlugin;

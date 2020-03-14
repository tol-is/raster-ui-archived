import postcss from 'postcss';
import { ITheme } from '@styled-rhythm/types';

import rhythm from './rhythm';

const plugins = [rhythm];

const rhythmPlugin = postcss.plugin('styled-rhythm', (theme: ITheme) => {
	return (css, result) => {
		plugins.forEach(plugin => {
			plugin(css, theme, result);
		});
	};
});

export default rhythmPlugin;

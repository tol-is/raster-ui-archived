import postcss from 'postcss';
import { ThemeConfig, Theme } from '@styled-rhythm/types';
import { baselineScaleToRem } from '@styled-rhythm/utils';
// import * as stylefmt from 'stylefmt';

import type from './type';
import rhythm from './rhythm';
import measure from './measure';
import matrix from './matrix';

const plugins = [type, rhythm, measure, matrix];

/*
	font: sans-400i 14/5;
	font-family: sans-400i;
	font-size: 14/5;
	rhythm: 5;
	rhythm-x: 10;
	rhythm-y: 10;
	measure: 1;
	measure-min: 1;
	measure-max: 4;
	columns: 8;
	column-span: 3
*/

const rhythmPlugin = postcss.plugin('styled-rhythm', (config: ThemeConfig) => {
	const { root, baseline, rhythm, fonts, leading, measure, type } = config;

	// - rhythm is described in baseline units
	// - convert rhythm scale to rem
	const rhythmScale = baselineScaleToRem(baseline)(root)(rhythm);

	const theme: Theme = {
		root,
		baseline,
		rhythm: rhythmScale,
		fonts,
		leading,
		measure,
		type,
	};

	// console.log(stylefmt);

	return (css, result) => {
		plugins.forEach(plugin => {
			plugin(css, theme, result);
		});
	};
});

export default rhythmPlugin;

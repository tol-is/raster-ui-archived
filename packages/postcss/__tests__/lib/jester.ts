import { stripcss } from '@raster-ui/utils';
import theme from '@raster-ui/theme-test';

import postcss from 'postcss';
import rasterSystemPostcss from '../../src';

const createPostCSSConfig = (theme, input) => {
	return postcss([rasterSystemPostcss(theme)])
		.process(input, {
			from: undefined,
		})
		.then(({ css }) => {
			console.log(css);
			return css;
		});
};

export const matcher = (input, result) =>
	createPostCSSConfig(theme, input).then(css => {
		expect(stripcss(css)).toBe(stripcss(result));
	});

export const logger = input =>
	createPostCSSConfig(theme, input).then(css => {
		// console.log(css);
		expect(true).toBe(true);
	});

export default matcher;

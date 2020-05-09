import { Theme } from '@raster-ui/types';
import { is, get, pxToRem } from '@raster-ui/utils';

export const screensPlugin = (css: any, theme: Theme, result: any) => {
	const { root, relative, breakpoints } = theme;

	const toRem = pxToRem(root);

	css.walkAtRules('screen', atRule => {
		const screenKey = atRule.params;

		const themeScreen = breakpoints.find(({ key }) => key === screenKey);

		if (!is.truthy(themeScreen)) {
			throw atRule.error(`No \`${screenKey}\` screen found.`);
		}
		atRule.name = 'media';
		atRule.params = `(min-width: ${
			relative
				? `${toRem(themeScreen.width)}rem`
				: `${themeScreen.width}px`
		})`;
	});
};

export default screensPlugin;

import { Theme } from '@raster-ui/types';
import { is, get } from '@raster-ui/utils';

export const screensPlugin = (css: any, theme: Theme, result: any) => {
	const { breakpoints } = theme;

	css.walkAtRules('screen', atRule => {
		const screenKey = atRule.params;

		const themeScreen = breakpoints.find(({ key }) => key === screenKey);

		if (!is.truthy(themeScreen)) {
			throw atRule.error(`No \`${screenKey}\` screen found.`);
		}
		atRule.name = 'media';
		atRule.params = `(min-width: ${themeScreen.width})`;
	});
};

export default screensPlugin;

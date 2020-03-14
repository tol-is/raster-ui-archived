import replace from './replace-rule';

export const rhythmPlugin = (css, theme, result) => {
	css.walkAtRules('rhythm', atRule => {
		const rhythm = atRule.params;

		replace(atRule, {
			marginBottom: '12rem',
		});
	});
};

export default rhythmPlugin;

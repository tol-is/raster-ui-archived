import { Theme } from '@styled-rhythm/types';

export const typePlugin = (css: any, theme: Theme, result: any) => {
	// css.walkAtRules('font', atRule => {
	// 	const rhythm = atRule.params;
	// 	replace(atRule, {
	// 		marginBottom: '12rem',
	// 	});
	// });
	// css.walkDecls(decl => {
	// 	const { prop, value } = decl;
	// 	console.log(prop, value);
	// 	if (prop === 'font')
	// 		replace(decl, {
	// 			fontSize: '120px',
	// 		});
	// 	// selectors.push(rule.selector);
	// });
};

export default typePlugin;

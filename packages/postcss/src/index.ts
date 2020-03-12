import postcss from 'postcss';
import { ITheme } from '@styled-rhythm/types';

const rhythmPlugin = postcss.plugin('styled-rhythm', (theme: ITheme) => {
	let runTheme = Object.assign({}, theme);

	return (css, result) => {
		console.log(runTheme);
		console.log(css);
	};
});

export default rhythmPlugin;

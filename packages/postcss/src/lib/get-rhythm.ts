import { is, get, pxToRem } from '@styled-rhythm/utils';

//
export const getRhythmValue = theme => key => {
	//
	const { relative, root, baseline } = theme;
	const toRootEm = pxToRem(root);

	//
	const scaleValue = get(theme.rhythm, key, key);

	// if it's just a number, transform to px or rem if relative
	// else try to get a theme value
	const styleValue = is.num(scaleValue)
		? is.exists(relative)
			? `${toRootEm(scaleValue * baseline)}rem`
			: `${scaleValue * baseline}px`
		: get(theme, key, key);

	return styleValue;
};

export default getRhythmValue;

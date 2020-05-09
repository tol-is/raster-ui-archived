import { Theme } from '@raster-ui/types';

import { is } from './is';
import { get } from './get';
import { pxToRem } from './px-to-rem';

//
export const getRhythm = (theme: Theme) => key => {
	//
	const { relative, root, baseline } = theme;
	const toRootEm = pxToRem(root);

	//
	const scaleValue = get(theme.rhythm, key, key);

	// if it's just a number, transform to px or rem if relative

	const styleValue = is.num(scaleValue)
		? is.truthy(relative)
			? `${toRootEm(scaleValue * baseline)}rem`
			: `${scaleValue * baseline}px`
		: // else try to get a theme value
		  // get will return the key as is if not found
		  get(theme, key, key);

	return styleValue;
};

export default getRhythm;

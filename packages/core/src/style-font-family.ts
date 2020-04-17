import * as CSS from 'csstype';
import { FontOpenType } from '@raster-ui/types';

type TypeStyleFontFamilyParams = {
	font: FontOpenType;
};

type TypeStyleFontFamily = {
	fontFamily: CSS.FontFamilyProperty;
	fontWeight: CSS.FontWeightProperty;
	fontStyle: CSS.FontStyleProperty;
};

/**
 *
 *
 */
export const styleFontFamily = (
	params: TypeStyleFontFamilyParams
): TypeStyleFontFamily => {
	//
	const { font } = params;

	return {
		fontFamily: `"${font.familyName}", ${font.fallback}`,
		fontWeight: font.weight,
		fontStyle: font.italic ? 'italic' : 'normal',
	};
};

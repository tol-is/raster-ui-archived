import {
	TypeStyleFontFamilyParams,
	TypeStyleFontFamily,
} from '@raster-system/types';

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

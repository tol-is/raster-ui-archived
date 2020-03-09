import * as CSS from 'csstype';

interface IFont {
	upm: number;
	capHeight: number;
	ascent: number;
	descent: number;
	weight: CSS.FontWeightProperty;
	italic: boolean;
	familyName: CSS.FontFamilyProperty;
	fallback: CSS.FontFamilyProperty;
}

interface ITypeStyleBaselineParams {
	font: IFont;
	baseline: number;
	root: number;
	fontSize: number;
	leading: number;
}

type TypeStyleBaseline = {
	fontFamily: CSS.FontFamilyProperty;
	fontWeight: CSS.FontWeightProperty;
	fontStyle: CSS.FontStyleProperty;
	display: CSS.DisplayProperty;
	fontSize: CSS.FontSizeProperty<string>;
	lineHeight: CSS.LineHeightProperty<string | number>;
	transform: CSS.TransformProperty;
	paddingTop: CSS.PaddingTopProperty<string>;
	'&:before': {
		content: string;
		marginTop: CSS.MarginProperty<string>;
		display: CSS.DisplayProperty;
		height: CSS.HeightProperty<string | number>;
	};
};

/**
 *
 *
 */
export const styleBaselineRel = (params: ITypeStyleBaselineParams): TypeStyleBaseline => {
	//
	const { font, baseline, root, fontSize, leading = 0 } = params;
	//
	const preventCollapse = 1;

	// cap height
	const capHeightRatio = font.capHeight / font.upm;
	const capSize = capHeightRatio * fontSize;

	// content box / round up baseline unit
	const typeRows = Math.ceil(capSize / baseline);
	const typeHeight = typeRows * baseline;

	// round leading
	const leadingRound = Math.round(leading);
	// if negative min value is typeRows
	const leadingValue = leadingRound < 0 ? Math.min(Math.abs(leadingRound), typeRows) * -1 : leadingRound;

	// leading height in px
	const leadingHeight = leadingValue * baseline;

	// line-height in px
	const lineHeight = typeHeight + leadingHeight;

	// crop white space top
	const negativeSpace = lineHeight - typeHeight;
	const cropHeight = negativeSpace - (negativeSpace % baseline);

	// align to baseline
	const boundingBoxHeight = ((font.ascent + Math.abs(font.descent)) / font.upm) * fontSize;

	const descendHeight = Math.abs(font.descent / font.upm) * fontSize;
	const whiteSpaceHalf = (boundingBoxHeight - lineHeight) / 2;
	const baselineOffset = -1 * (whiteSpaceHalf - descendHeight);

	return {
		fontFamily: `"${font.familyName}", ${font.fallback}`,
		fontWeight: font.weight,
		fontStyle: font.italic ? 'italic' : 'normal',
		display: 'block',
		fontSize: `${fontSize / root}rem`,
		lineHeight: `${lineHeight / fontSize}`,
		transform: `translateY(${baselineOffset / fontSize}em)`,
		paddingTop: `${preventCollapse}px`,
		['&:before']: {
			content: `''`,
			marginTop: `calc(${-(cropHeight + preventCollapse) / fontSize}em )`,
			display: 'block',
			height: 0,
		},
	};
};

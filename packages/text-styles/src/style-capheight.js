/**
 *
 *
 */
const styleCapHeight = ({ font, baseline, fontSize, leading = 0 }) => {
	//
	const preventCollapse = 1;

	// cap height
	const capHeightRatio = font.capHeight / font.upm;
	const typeHeight = capHeightRatio * fontSize;

	//
	const typesRows = Math.floor(typeHeight / baseline);

	// round leading
	const leadingRound = Math.round(leading);
	// if negative min value is typeRows
	const leadingValue = leadingRound < 0 ? Math.min(Math.abs(leadingRound), typesRows) * -1 : leadingRound;

	// leading height in px
	const leadingHeight = leadingValue * baseline;

	// line-height in px
	const lineHeight = typeHeight + leadingHeight;

	// crop white space top
	const negativeSpace = lineHeight - typeHeight;
	const cropHeight = negativeSpace;

	// align to baseline
	const boundingBoxHeight = ((font.ascent + Math.abs(font.descent)) / font.upm) * fontSize;
	const descendHeight = Math.abs(font.descent / font.upm) * fontSize;
	const whiteSpaceHalf = (boundingBoxHeight - lineHeight) / 2;
	const baselineOffset = -1 * (whiteSpaceHalf - descendHeight);

	return {
		fontFamily: `"${font.familyName}"`,
		fontWeight: font.weight,
		fontStyle: font.italic ? 'italic' : 'normal',
		display: 'block',
		fontSize: `${fontSize}px`,
		lineHeight: `${lineHeight}px`,
		transform: `translateY(${baselineOffset}px)`,
		paddingTop: `${preventCollapse}px`,
		['&:before']: {
			content: `''`,
			marginTop: `${-(cropHeight + preventCollapse)}px`,
			display: 'block',
			height: 0,
		},
	};
};

module.exports = styleCapHeight;

export const bgBaselineRel = ({ baseline, root }) => ({
	position: 'relative',
	backgroundRepeat: 'repeat',
	backgroundSize: `100% ${(baseline * 2) / root}rem`,
	backgroundImage: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) ${baseline / root}rem,
    transparent ${baseline / root}rem
    )`,
});

export const bgBaseline = ({ baseline }) => ({
	position: 'relative',
	backgroundRepeat: 'repeat',
	backgroundSize: `100% ${baseline * 2}px`,
	backgroundImage: `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) ${baseline}px,
    transparent ${baseline}px
    )`,
});

const root = 8;
const baseline = 8;

const breakpoints = [{ key: 'md', width: 960 }];

// type scale in px
const type = [10, 20, 30, 40, 50];

// rhythm scale in baseline units
const rhythm = [0, 1, 2, 3, 4];

// measure scale in characters unit
const measure = ['auto', 10, 20, 30, 40, 50];

// leading scale in baseline units
const leading = [0, 1, 2, 3, 4, 5];

// font config
const fonts = [
	{
		key: 'sans-400',
		familyName: 'IBM Plex Sans',
		fallback: 'sans-serif',
		upm: 1000,
		xHeight: 525,
		capHeight: 698,
		ascent: 1025,
		descent: -275,
		weight: 400,
		italic: false,
	},
	{
		key: 'serif-400',
		familyName: 'IBM Plex Serif',
		fallback: 'serif',
		upm: 1000,
		xHeight: 516,
		capHeight: 698,
		ascent: 1025,
		descent: -275,
		weight: 400,
		italic: false,
	},
];

module.exports = {
	useRem: true,
	colors,
	breakpoints,
	baseline,
	root,
	type,
	rhythm,
	measure,
	leading,
	fonts,
};

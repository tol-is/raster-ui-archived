import * as CSS from 'csstype';

interface Style extends CSS.Properties {
	[key: string]: any;
}

export const rhythm = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginTop: space,
		},
	};
};

export const rhythmY = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginTop: space,
		},
	};
};

export const rhythmX = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginLeft: space,
		},
	};
};

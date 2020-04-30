import { Style } from '@raster-ui/types';

export const owlY = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginTop: space,
		},
	};
};

export const owlX = ({ space }: { space: string }): Style => {
	return {
		[`& > * + * `]: {
			marginLeft: space,
		},
	};
};

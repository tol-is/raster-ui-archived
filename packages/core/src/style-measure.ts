import { Style } from '@raster-ui/types';

export const measure = ({ space }: { space: string }): Style => {
	return {
		maxWidth: space,
	};
};

export const measureMin = ({ space }: { space: string }): Style => {
	return {
		minWidth: space,
	};
};

export const measureMax = ({ space }: { space: string }): Style => {
	return {
		maxWidth: space,
	};
};

import { Properties } from 'csstype';

export const measure = ({ length }: { length: Number }): Properties => {
	return {
		maxWidth: `${length}ch`,
	};
};

export const measureMin = ({ length }: { length: Number }): Properties => {
	return {
		minWidth: `${length}ch`,
	};
};

export const measureMax = ({ length }: { length: Number }): Properties => {
	return {
		maxWidth: `${length}ch`,
	};
};

import { Theme, Style } from '@styled-rhythm/types';
import { is } from '@styled-rhythm/utils';

export const measure = ({ length }: { length: Number }): Style => {
	return {
		maxWidth: `${length}${is.num(length) ? 'ch' : ''}`,
	};
};

export const measureMin = ({ length }: { length: Number }): Style => {
	return {
		minWidth: `${length}${is.num(length) ? 'ch' : ''}`,
	};
};

export const measureMax = ({ length }: { length: Number }): Style => {
	return {
		maxWidth: `${length}${is.num(length) ? 'ch' : ''}`,
	};
};

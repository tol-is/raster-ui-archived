import RATIOS from './ratios';

export const modularScale = (params: any = {}) => {
	const { base = 16, ratio = RATIOS.PERFECT_FOURTH, interval = 2 } = params;

	return step => {
		return Math.floor(base * Math.pow(ratio, step / interval));
	};
};

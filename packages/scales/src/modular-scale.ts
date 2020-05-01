import { RATIOS } from './ratios';

type modularScaleParams = {
	base: number;
	ratio: number;
	interval: number;
};

export const modularScale = (params: modularScaleParams) => {
	const { base = 16, ratio = RATIOS.PERFECT_FOURTH, interval = 2 } = params;

	return (step: number) => {
		return Math.floor(base * Math.pow(ratio, step / interval));
	};
};

export default modularScale;

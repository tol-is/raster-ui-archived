type modularScaleParams = {
	base: number;
	interval: number;
	increment: number;
};

export const ibmCarbonScale = (params: modularScaleParams): Function => {
	const { base = 16, interval = 4, increment = 2 } = params;

	const computeFontSize = (step: number): number => {
		if (step <= 1) {
			return base;
		}

		return (
			computeFontSize(step - 1) +
			Math.floor((step - 2) / interval + 1) * increment
		);
	};

	return (step: number): number => computeFontSize(step + 1);
};

export default ibmCarbonScale;

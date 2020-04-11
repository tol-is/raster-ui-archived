export const ibmCarbonScale = (params: any = {}) => {
	const { base = 16, interval = 4, increment = 2 } = params;

	const computeFontSize = step => {
		if (step <= 1) {
			return base;
		}

		return computeFontSize(step - 1) + Math.floor((step - 2) / interval + 1) * increment;
	};

	return step => computeFontSize(step + 1);
};

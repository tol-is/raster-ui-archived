exports.columns = ({ count }) => {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(${count}, minmax(0,1fr))`,
		[`& > * `]: {
			gridColumn: 'span 1',
		},
	};
};

exports.column = ({ start, span }) => {
	return {
		gridColumn: `${start} / span ${span}`,
	};
};

exports.gap = ({ space }) => {
	return {
		gridRowGap: space,
		gridColumnGap: space,
	};
};

exports.gapX = ({ space }) => {
	return {
		gridColumnGap: space,
	};
};

exports.gapY = ({ space }) => {
	return {
		gridRowGap: space,
	};
};

exports.measure = ({ length }) => {
	return {
		maxWidth: `${length}ch`,
	};
};

exports.measureMin = ({ length }) => {
	return {
		minWidth: `${length}ch`,
	};
};

exports.measureMax = ({ length }) => {
	return {
		maxWidth: `${length}ch`,
	};
};

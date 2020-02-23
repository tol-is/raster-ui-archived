const { is } = require('./is');
const { pxToRem } = require('./px-to-rem');

exports.pxScaleToRem = root => scale => {
	//
	const result = Object.keys(scale).reduce((res, key) => {
		const toRootEm = pxToRem(root);
		const value = scale[key];
		//
		return {
			[key]: is.num(value) ? `${toRootEm(value)}rem` : value,
			...res,
		};
	}, {});
	return result;
};

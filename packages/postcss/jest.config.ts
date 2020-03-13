const base = require('../../jest.config.base.ts');
const pack = require('./package');
const packageName = pack.name;

module.exports = {
	...base,
	name: packageName,
	displayName: packageName,
};

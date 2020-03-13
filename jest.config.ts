const base = require('./jest.config.base.ts');

module.exports = {
	...base,
	projects: ['<rootDir>/packages/*/jest.config.ts'],
	setupFilesAfterEnv: ['./jest.setup.ts'],
};

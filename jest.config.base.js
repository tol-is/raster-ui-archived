module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.tsx$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)?$',
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
	coveragePathIgnorePatterns: ['(tests/.*.mock).(|ts?|tsx?)$'],
	verbose: true,
	testPathIgnorePatterns: ['/__snapshots__/', '/.cache/', '/lib/', '/dist/'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'../../../config/jest/fileMock.js',
		'\\.(css)$': 'identity-obj-proxy',
	},
	collectCoverage: false,
	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!<rootDir>/dist/'],
	modulePathIgnorePatterns: [
		'/__snapshots__/',
		'dummy',
		'scripts',
		'docs',
		'__tests__/lib/',
	],
	snapshotSerializers: ['jest-emotion'],
	globals: {
		'process.env.__DEV__': true,
		'process.env.__PROD__': false,
		'process.env.__BROWSER__': false,
		'process.env.__SERVER__': false,
	},
};

// module.exports = {
// 	roots: ['<rootDir>'],
// 	transform: {
// 		'^.+\\.ts$': 'ts-jest',
// 		'^.+\\.tsx$': 'ts-jest',
// 	},
// 	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)?$',
// 	moduleFileExtensions: ['ts', 'tsx', 'jsx', 'json', 'node'],
// 	coveragePathIgnorePatterns: ['(tests/.*.mock).(|ts?|tsx?)$'],
// 	verbose: true,
// 	testPathIgnorePatterns: ['/__snapshots__/', '<rootDir>/packages/docs/.cache/'],
// 	moduleNameMapper: {
// 		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|mp4|webm|wav|mp3|m4a|aac|oga)$': '../../../config/jest/fileMock.js',
// 		'\\.(css)$': 'identity-obj-proxy',
// 	},
// 	collectCoverage: false,

// 	collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!<rootDir>/dist/'],
// 	modulePathIgnorePatterns: ['/dummy', '/scripts', '/docs/', '__tests__/lib/', '/packages/docs/.cache/'],
// 	snapshotSerializers: ['jest-emotion'],
// 	globals: {
// 		'process.env.__DEV__': true,
// 		'process.env.__PROD__': false,
// 		'process.env.__BROWSER__': false,
// 		'process.env.__SERVER__': false,
// 	},
// };

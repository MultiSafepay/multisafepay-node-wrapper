module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  /* coveragePathIgnorePatterns: ['<rootDir>/src/typings'], */
  verbose: false, // set true to hidde console.log
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^api-wrapper/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/*.ts'],
  testEnvironment: 'node',
};

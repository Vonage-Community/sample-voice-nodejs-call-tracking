const config = {
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: ['lib/**/*.js'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/__tests__',
  ],
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
};

module.exports = config;

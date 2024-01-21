module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.scss$': 'jest-transform-stub',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!**/vendor/**'],
  coverageReporters: ['lcov', 'text', 'html'],
  coverageDirectory: 'coverage',
};

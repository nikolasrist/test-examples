module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'js'],
  rootDir: '.',
  preset: 'ts-jest',
  testRegex: '\\.spec\\.ts$',
  testEnvironment: 'node',
  coverageReporters: ['text', 'html', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts}', '!**/node_modules/**', '!**/vendor/**'],
  coverageThreshold: {
    'src/': {
      statements: 100,
      lines: 100,
      functions: 100,
      branches: 100
    }
  }
};

module.exports = {
  coverageDirectory: '<rootDir>/coverage',
  preset: 'ts-jest/presets/js-with-babel',
  rootDir: './',
  verbose: true,
  testResultsProcessor: 'jest-sonar-reporter',
  globals: {
    __IS_SERVER__: false,
    __NAME__: require('./package.json').name,
  },
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/test/**/*',
    '!src/**/types.ts',
    '!src/**/*.test.ts',
    '!src/**/*.test.tsx',
    '!src/**/__mocks__/**/*',
    '!src/**/__test__/**/*',
    '!src/**/mixins/**/*',
    '!src/**/index.ts',
    '!src/**/index.ts',
    '!src/**/styles.ts',
    '!src/**/*.stories.*',
    '!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [],
  setupFiles: [
    'react-app-polyfill/jsdom'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/src/test/setup-tests.ts'
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/config/jest/babel-transform.js',
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/config/jest/file-transform.js'
  },
  transformIgnorePatterns: [],
  modulePaths: [],
  moduleNameMapper: {
    '.+\\.(css|scss|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub',
    '\\.svg': '<rootDir>/src/test/svg-mock.ts',
    '^react($|/.+)': '<rootDir>/node_modules/react$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  resetMocks: true
};

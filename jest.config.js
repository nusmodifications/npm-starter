module.exports = {
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules'],
  moduleNameMapper: { // eslint-disable-next-line max-len
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|bmp|ico|yml)$': '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
  modulePaths: [
    'src',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  testRegex: '(/__tests__/.*\\.test.js)$',
};

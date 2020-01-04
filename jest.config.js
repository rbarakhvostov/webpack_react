module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ['./src/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|s[ca]ss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-styled-components', 'jest-canvas-mock'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,ts,tsx}',
    '!**/mocks/**/*',     
    '!src/**/!(*.styles).ts',
    '!src/Routes/index.tsx',
    '!src/reportWebVitals.js',
    '!src/setupTests.js' 
  ],
};

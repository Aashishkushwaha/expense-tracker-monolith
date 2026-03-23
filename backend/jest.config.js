export default {
  collectCoverage: true,
  collectCoverageFrom: [
    './**/*.js', // consider every file for coverage calculation
    '!./coverage/**/*.js', // ignore this file from coverage calculation
    '!./server.js', // ignore this file from coverage calculation
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

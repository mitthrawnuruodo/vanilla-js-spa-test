module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['dotenv/config'],

  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
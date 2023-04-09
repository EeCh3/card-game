/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    transformIgnorePatterns: [    "<rootDir>/node_modules/",
    "<rootDir>/src/fonts and style/style.css"],
    "moduleNameMapper": {
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
      }
};

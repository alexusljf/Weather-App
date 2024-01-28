module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',    
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // add the following for scss file support
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    }
}

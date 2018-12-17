module.exports = {
    baseUrl: 'http://localhost:3000',
    gridUrl: 'http://localhost:4444/wd/hub',
    screenshotsDir: 'newton-report/images',
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins: {
        'newton-reporter/hermione-entry': {
            path: 'newton-report'
        }
    },
    compositeImage: true
};

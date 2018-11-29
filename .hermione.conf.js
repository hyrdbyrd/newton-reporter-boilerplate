module.exports = {
    baseUrl: 'http://localhost:3000',
    gridUrl: 'http://localhost:4444/wd/hub',
    screenshotsDir: 'html-reporter/images',
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins: {
        'html-reporter/hermione-entry': {
            path: 'harry-report'
        }
    },
    compositeImage: true
};

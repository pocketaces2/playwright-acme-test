//Define cucumber options

const firefox = {
    browser: 'firefox',
    context: {
        ignoreHTTPSErrors: true
    }
}
const chromium = {
    browser: 'chromium',
    context: {
        ignoreHTTPSErrors: true,
        args: ['--disable-dev-shm-usage', '--no-sandbox','--start-fullscreen']
    }
}

const getWorldParams = () => {
    const params = {
        foo: 'bar',
    };

    return params;
};

const config = {
    browser: 'firefox',
    failFast: false,
    tags: 'not @wip',
    requireModule: ['ts-node/register'],
    require: ['steps/*.ts'],
    format: [
        'json:reports/cucumber-report.json',
        'html:reports/report.html',
        'summary',
        'progress-bar',
    ],
    formatOptions: { snippetInterface: 'async-await' },
    worldParameters: getWorldParams(),
    publishQuiet: true,
};

    config.format.push('@cucumber/pretty-formatter');

export default config;

// export default {
//
//     default: { ...common, worldParameters: chromium, run_features },
//     chromium: { ...common, worldParameters: chromium },
// }
//Define cucumber options

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
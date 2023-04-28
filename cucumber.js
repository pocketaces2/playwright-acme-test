//Define cucumber options

let options = [
    '--require-module ts-node/register', //Load TypeScript module
    'require ./steps/*.steps.ts', //Load step defs
    '--format progress', //Load custom formatter
].join(' ');


const common = {
    // https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md
    failFast: false,
    tags: 'not @wip',
    format: ['@cucumber/pretty-formatter', 'html:cucumber-report.html'],
    require: ['hooks.js', 'step_definitions/*.steps.js']
};

const chromium = {
    browser: 'chromium',
    context: {
        ignoreHTTPSErrors: true,
        args: ['--disable-dev-shm-usage', '--no-sandbox','--start-fullscreen']
    }
}

const firefox = {
    browser: 'firefox',
    context: {
        ignoreHTTPSErrors: true
    }
}

module.exports = {
    default: { ...common, worldParameters: chromium },
    chromium: { ...common, worldParameters: chromium },
    firefox: { ...common, worldParameters: firefox },
}
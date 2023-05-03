import {After, Before, BeforeAll, setDefaultTimeout} from "@cucumber/cucumber";
import {Browser, chromium, Page} from "@playwright/test";
import {browserConfig} from "./browserConfig";
import {firefox, webkit} from "playwright";
import { ensureDir } from 'fs-extra';


let page: Page;
let browser: Browser;
//Must define as a String to compile
let BASE_URL: string;

const tracesDir = 'traces';


let urls = {
    TEST_URL: 'https://localhost:3000',
    PROD_URL: 'https://demo.applitools.com/',
};


BASE_URL = urls.PROD_URL;

setDefaultTimeout(60000);

BeforeAll(async function () {
    switch (browserConfig.browser) {
        case 'firefox':
            browser = await firefox.launch(browserConfig.browserOptions);
            break;
        case 'webkit':
            browser = await webkit.launch(browserConfig.browserOptions);
            break;
        default:
            browser = await chromium.launch(browserConfig.browserOptions);
    }
    await ensureDir(tracesDir);
});

Before(async () => {
    try {
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://demo.applitools.com/');
        console.log(`Initialized tests on the site: ${await page.title()}`);
    }
    catch (error) {
        console.log(`Navigation to demo site failed due to ${error}`);
        throw new Error(`Navigation to demo site failed due to ${error}`);
    }
    return page;
});

After(async () => {
    await browser.close();
})

export {page, browser, BASE_URL};
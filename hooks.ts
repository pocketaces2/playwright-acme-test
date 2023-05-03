import {After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import {Browser, chromium, Page} from "@playwright/test";

let page: Page;
let browser: Browser;
//Must define as a String to compile
let BASE_URL: string;

let urls = {
    TEST_URL: 'https://localhost:3000',
    PROD_URL: 'https://demo.applitools.com/',
};


BASE_URL = urls.PROD_URL;

setDefaultTimeout(60000);

//TODO: Add parameter options to browser.newContext()
//TODO: Make browser dynamic

Before(async () => {
    try {
        browser = await chromium.launch({headless: false});
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
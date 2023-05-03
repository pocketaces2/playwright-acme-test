import {Given, Then, When} from "@cucumber/cucumber";
import { LoginPage } from "../page_objects/login.page";
import {OverviewPage} from "../page_objects/overview.page";
import {expect} from "@playwright/test";

const loginPage = new LoginPage();
const overviewPage = new OverviewPage();


Given('I am on the bank login page', async function () {
    await loginPage.navigateTo();
});

When('I enter my account details and click login', async function () {
    await loginPage.clickLoginButton();
});

Then('I should be on my bank account main page', async function () {
    let customerName = await overviewPage.getCustomerName();
    customerName = customerName?.trim() as string | null;
    expect(customerName).toEqual('Jack Gomez');
});

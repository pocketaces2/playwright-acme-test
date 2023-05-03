import {page, BASE_URL} from "../hooks";

export class LoginPage {
    private accountLoginButton: string;

    constructor() {
        // locators for login
        this.accountLoginButton = '[id="log-in"]';
    }

    async navigateTo() {
        await page.goto(BASE_URL);
    }

    async clickLoginButton() {
        await page.locator(this.accountLoginButton).click();
    }
}

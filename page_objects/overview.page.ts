import {page, BASE_URL} from "../hooks";

export class OverviewPage {
    private accountName: string;

    constructor() {
        this.accountName = 'div .logged-user-name';
    }

    async navigateTo() {
        await page.goto(`${BASE_URL}/app.html`);
    }

    async getCustomerName() {
        return await page.locator(this.accountName).textContent();
    }
}

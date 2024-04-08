import { Page } from '@playwright/test';

export class HomePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private pageLinkMenu = (pageLink: string) => this.page.getByRole('link', { name: pageLink });

    // Methods
    async navigate() {
        // Recommended to make the url an Environment Variable
        await this.page.goto('https://the-internet.herokuapp.com');
    }

    async goToPage(pageLink: string) {
        await this.pageLinkMenu(pageLink).isVisible();
        await this.pageLinkMenu(pageLink).click();
    }
}
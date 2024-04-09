import { Page } from '@playwright/test';

export class KeyPressPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /* Locators */
    // This locator is private as we don't need to use it outside of this file
    private pageHeading = () => this.page.getByRole('heading', { name: 'Key Presses' });
    // This locator is public so we can access it to make an assertion in the test
    public keyboardActionResultText = () => this.page.locator('#result');

    /* Methods */
    async pressKey(key : string) {
        // This is optional to reduce chances of flakiness by waiting for the loading of the domcontent
        await this.page.waitForLoadState('domcontentloaded');
        
        await this.pageHeading().isVisible();
        await this.page.keyboard.press(key);
        await this.keyboardActionResultText().isVisible();
    }
}
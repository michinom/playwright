import { Page } from '@playwright/test';

export class KeyPressPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private pageHeading = () => this.page.getByRole('heading', { name: 'Key Presses' });
    public keyboardActionResultText = () => this.page.locator('#result');

    // Methods
    async pressKey(key : string) {
        await this.pageHeading().isVisible();
        await this.page.keyboard.press(key);
        await this.keyboardActionResultText().isVisible();
    }
}
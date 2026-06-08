import {expect, Page} from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {
    }

    private readonly locators = {
        username: this.page.getByPlaceholder('Username'),
        password: this.page.getByPlaceholder('Password'),
        loginButton: this.page.getByRole('button', {name: 'Login'})
    }

    public async navigate() {
        await this.page.goto('/web/index.php/auth/login');
    }

    public async enterUsername(username: string) {
        await this.locators.username.fill(username);
    }

    public async enterPassword(password: string) {
        await this.locators.password.fill(password);
    }

    public async clickOnLoginButton() {
        await this.locators.loginButton.click();
    }

    public async assertErrorMessage(errorMessage: string) {
        await expect(this.page.getByRole('alert')).toContainText(errorMessage);
    }
}

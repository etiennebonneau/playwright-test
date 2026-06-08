import {expect, Page} from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) {
    }

    private readonly locators = {
        dashboardHeader: this.page.getByRole('heading', {name: 'Dashboard'})
    }

    public async assertDashboardHeader() {
        await expect(this.locators.dashboardHeader).toBeVisible();
    }
}
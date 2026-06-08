import {createBdd} from 'playwright-bdd';
import {LoginPage} from '../pages/login_page';
import {DashboardPage} from '../pages/dashboard_page';

const {Given, When, Then} = createBdd();

Given('a user navigate on the login page', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});

Given('the user enters username {string}', async ({page}, username: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(username);
});

Given('the user enters password {string}', async ({page}, password: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterPassword(password);
});

When('the user clicks on the login button', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickOnLoginButton();
});

Then('the user should be successfully logged in', async ({page}) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.assertDashboardHeader();
})

Then('the user should see an error message {string}', async ({page}, errorMessage: string) => {
    const loginPage = new LoginPage(page);
    await loginPage.assertErrorMessage(errorMessage);
})
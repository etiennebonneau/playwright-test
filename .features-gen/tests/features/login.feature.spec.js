// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('login on OrangeHRM website', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('a user navigate on the login page', null, { page }); 
  });
  
  test('Login with valid credentials', { tag: ['@login', '@frontend', '@orangehrm', '@validCredentials'] }, async ({ When, Then, And, page }) => { 
    await And('the user enters username "Admin"', null, { page }); 
    await And('the user enters password "admin123"', null, { page }); 
    await When('the user clicks on the login button', null, { page }); 
    await Then('the user should be successfully logged in', null, { page }); 
  });

  test.describe('Login with invalid credentials', () => {

    test('Example #1', { tag: ['@login', '@frontend', '@orangehrm', '@invalidCredentials'] }, async ({ When, Then, And, page }) => { 
      await And('the user enters username "Admin"', null, { page }); 
      await And('the user enters password "wrongpassword"', null, { page }); 
      await When('the user clicks on the login button', null, { page }); 
      await Then('the user should see an error message "Invalid credentials"', null, { page }); 
    });

    test('Example #2', { tag: ['@login', '@frontend', '@orangehrm', '@invalidCredentials'] }, async ({ When, Then, And, page }) => { 
      await And('the user enters username "wrongusername"', null, { page }); 
      await And('the user enters password "admin123"', null, { page }); 
      await When('the user clicks on the login button', null, { page }); 
      await Then('the user should see an error message "Invalid credentials"', null, { page }); 
    });

    test('Example #3', { tag: ['@login', '@frontend', '@orangehrm', '@invalidCredentials'] }, async ({ When, Then, And, page }) => { 
      await And('the user enters username "wrongusername"', null, { page }); 
      await And('the user enters password "wrongpassword"', null, { page }); 
      await When('the user clicks on the login button', null, { page }); 
      await Then('the user should see an error message "Invalid credentials"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":12,"tags":["@login","@frontend","@orangehrm","@validCredentials"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given a user navigate on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And the user enters username \"Admin\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Admin\"","children":[{"start":26,"value":"Admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And the user enters password \"admin123\"","stepMatchArguments":[{"group":{"start":25,"value":"\"admin123\"","children":[{"start":26,"value":"admin123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user should be successfully logged in","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":27,"tags":["@login","@frontend","@orangehrm","@invalidCredentials"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given a user navigate on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And the user enters username \"Admin\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Admin\"","children":[{"start":26,"value":"Admin","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"And the user enters password \"wrongpassword\"","stepMatchArguments":[{"group":{"start":25,"value":"\"wrongpassword\"","children":[{"start":26,"value":"wrongpassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message \"Invalid credentials\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Invalid credentials\"","children":[{"start":38,"value":"Invalid credentials","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":28,"tags":["@login","@frontend","@orangehrm","@invalidCredentials"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given a user navigate on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And the user enters username \"wrongusername\"","stepMatchArguments":[{"group":{"start":25,"value":"\"wrongusername\"","children":[{"start":26,"value":"wrongusername","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"And the user enters password \"admin123\"","stepMatchArguments":[{"group":{"start":25,"value":"\"admin123\"","children":[{"start":26,"value":"admin123","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message \"Invalid credentials\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Invalid credentials\"","children":[{"start":38,"value":"Invalid credentials","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":29,"tags":["@login","@frontend","@orangehrm","@invalidCredentials"],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given a user navigate on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"And the user enters username \"wrongusername\"","stepMatchArguments":[{"group":{"start":25,"value":"\"wrongusername\"","children":[{"start":26,"value":"wrongusername","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"And the user enters password \"wrongpassword\"","stepMatchArguments":[{"group":{"start":25,"value":"\"wrongpassword\"","children":[{"start":26,"value":"wrongpassword","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message \"Invalid credentials\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Invalid credentials\"","children":[{"start":38,"value":"Invalid credentials","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
@login
@frontend
@orangehrm

Feature: login on OrangeHRM website
  As a user I want to be able to log into the website OrangeHRM with my credentials

  Background:
    Given a user navigate on the login page

  @validCredentials
  Scenario: Login with valid credentials
    And the user enters username "Admin"
    And the user enters password "admin123"
    When the user clicks on the login button
    Then the user should be successfully logged in

  @invalidCredentials
  Scenario Outline: Login with invalid credentials
    And the user enters username "<username>"
    And the user enters password "<password>"
    When the user clicks on the login button
    Then the user should see an error message "Invalid credentials"

    Examples:
      | username      | password      |
      | Admin         | wrongpassword |
      | wrongusername | admin123      |
      | wrongusername | wrongpassword |
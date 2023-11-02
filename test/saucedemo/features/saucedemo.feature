@akbar-testing @sauce-demo
Feature: User Tests on Sauce Demo Web Page

  Scenario: User can login to Sauce Demo Home Page
    Given User on Sauce Demo Page
    When User input username
    And User input password
    And User click Login button
    Then User success login

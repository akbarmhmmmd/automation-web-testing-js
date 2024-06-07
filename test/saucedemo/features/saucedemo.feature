@akbar-testing @sauce-demo
Feature: User Tests on Sauce Demo Web Page

@positive-sauce-demo
  Scenario: User can login to Sauce Demo Home Page
    Given User on Sauce Demo Page
    When User input username "standard_user"
    And User input password "secret_sauce"
    And User click Login button
    Then User success Login to Swag Labs

@negative-sauce-demo
  Scenario Outline: User enter invalid credentials
    Given User on Sauce Demo Page
    When User input username "<user>"
    And User input password "<password>"
    And User click Login button
    Then User failed login <failed>
  
  Examples:
      | user                    | password     | failed             |
      | user                    | secret       | invalid            |
      | locked_out_user         | secret_sauce | locked_out         |
      | problem_user            | secret_sauce | problem            |
      | visual_user             | secret_sauce | visual             |

@akbar-testing @sauce-demo
Feature: User Tests on Sauce Demo Web Page

  Scenario: User can Login to Swab Labs
    Given User on Sauce Demo Page
    When User input username "standard_user"
    And User input password "secret_sauce"
    And User click Login button
    Then User success Login to Swag Labs

@add-product
  Scenario: User can Add Product to cart
    Given User on Sauce Demo Page
    When User input username "standard_user"
    And User input password "secret_sauce"
    And User redirected to Home Page
    And User click <click> Button
    Then User able to see <item> added to cart
  
  Examples:
      | click             | item          |
      | Add Backpack      | Backpack      |
      | Add Bike Light    | Bike Light    |
      | Add Bolt T Shirt  | Bolt T Shirt  |
      | Add Fleece Jacket | Fleece Jacket |
      | Add Onesie        | Onesie        |
      | Add Red T Shirt   | Red T Shirt   |

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

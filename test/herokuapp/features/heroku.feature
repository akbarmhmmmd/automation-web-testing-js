@akbar-testing @the-internet
Feature: User simulating example in Heroku Web

  Background:
    Given User on Heroku Web

  Scenario: User can Add Elements
    When User click Add Remove Element Button
    And User click Add Element Button
    Then User success Add Element

  Scenario: User can Delete Elements
    When User click Add Remove Element Button
    And User click Add Element Button
    And User click Delete Element Button
    Then User success Delete Element

  Scenario: User can click Checkboxes
    When User click Checkboxes Button
    And User click First Checkbox Button
    And User click Second Checkbox Button
    Then User success click Checkboxes

  Scenario: User can select Dropdown
    When User click Dropdown Button
    And User click Option Button
    And User select First Option
    And User select Second Option
    Then User success select Dropdown

  Scenario: User can Remove A Checkbox in Dynamic Controls
    When User click Dynamic Controls Button
    And User click A Checkbox Button
    And User click Remove Checkbox Button
    Then User success Remove A Checkbox

  Scenario: User can Add A Checkbox in Dynamic Controls
    When User click Dynamic Controls Button
    And User click A Checkbox Button
    And User click Remove Checkbox Button
    And User click Add Checkbox Button
    Then User success Add A Checkbox

  Scenario: User can input Field in Enable/Disable Section
    When User click Dynamic Controls Button
    And User click Enable Button
    And User input field "Test"
    And User click Disable Button
    Then User success Disabled Field

  Scenario: User can close Modal Window on Entry Ad Menu
    When User click Entry Ad Menu Button
    And User click Close Modal Button
    Then User success Enter Entry Ad Menu

  Scenario: User can Re-Enable Modal Window Entry Ad Menu
    When User click Entry Ad Menu Button
    And User click Click Here Button
    And User click Click Here Button
    And User click Close Modal Button
    Then User success Enter Entry Ad Menu

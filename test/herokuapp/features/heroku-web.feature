@akbartesting @the-internet
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

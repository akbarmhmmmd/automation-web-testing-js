@akbartesting @the-internet
Feature: User simulating example in Heroku Web

  Background:
    Given User on Heroku Web

  Scenario: User can Add Elements
    When User click Elements
    And User click Add Element
    Then User success Add Element

  Scenario: User can Delete Elements
    When User click Elements
    And User click Add Element
    And User click Delete Element
    Then User success Delete Element

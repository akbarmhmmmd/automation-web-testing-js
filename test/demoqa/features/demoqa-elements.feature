@akbar-testing @demoqa-elements
Feature: User simulating example Demo QA Elements

  Background:
    Given User on Demo QA Page
    When User click Elements Menu Button

  Scenario: User can Submit Form in Text Box Menu
    And User click Text Box Button
    And User input Username Field
    And User input Email Field
    And User input Current Address Field
    And User input Permanent Address Field
    And User click Submit Button
    Then User can view Submitted Data

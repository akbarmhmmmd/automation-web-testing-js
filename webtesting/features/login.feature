@squad-b @loginDasborv2
Feature: User Login to dasborv2

  Scenario: User Get Error Login With Empty Password to Dasborv2
    Given User on Dasborv2 login page
    And User input correct email
    And User input blank password
    When User click login button
    Then User get error message Empty Password

  Scenario: User Get Error Login With Empty field
    Given User on Dasborv2 login page
    When User click login button
    Then User get error message Empty Field

  Scenario: User Get Error Login With Mismatch Password to Dasborv2
    Given User on Dasborv2 login page
    And User input correct email
    And User input incorrect password
    When User click login button
    Then User get error message Mismatch Password

  Scenario: User Get Error Login With Invalid Format Email to Dasborv2
    Given User on Dasborv2 login page
    And User input incorrect email
    And User input correct password
    When User click login button
    Then User get error message Invalid Email

  Scenario: User Successfully Login With Registered Email to Dasborv2 Page
    Given User on Dasborv2 login page
    And User input correct email
    And User input correct password
    When User click login button
    Then Validate user already in Dasborv2 home page

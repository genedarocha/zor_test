Feature: The Zoro

  I want to open Zoro page

  Scenario: Opening a Zoro network page
    Given I open Zoro page
    Then I see "Zoro" in the title

  Scenario: Different kind of opening
    Given I kinda open Zoro page
    Then I am very happy

  Scenario: Enter EmailAddress and Password
    Given I Enter EmailAddress
    Then I Enter Password 
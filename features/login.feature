Feature: Customer login flow

  As a bank customer
  I should be able to login to my account

  Background:
    Given I have established a connection to the API

  @account
  Scenario: A customer care agent is able to login as a customer
    Given I am on the bank login page
    When I enter my account details and click login
    Then I should be on my bank account main page

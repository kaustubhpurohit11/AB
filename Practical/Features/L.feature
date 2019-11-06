@tag
Feature: Login Action
Test Login Functionality
@tag1
Scenario: Successful login with valid credentials

Given navigate to home page
When user enters username and password

|username|password   |
|Lalitha |Password123|
|Rick    |Rick123    |
|Andrew  |Andrew123  |
Then Login message displayed successfully


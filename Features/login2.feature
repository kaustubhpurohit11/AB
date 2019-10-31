Feature: Login
Login should be done in Testme App 

Scenario: Login sucessful
User should get message that logged in succesfully

Given I have opted to login
When I enter correct username and password
Then I should logged in succesfully

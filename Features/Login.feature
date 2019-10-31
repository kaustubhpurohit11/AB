Feature: Login 
   Login should be quick

Scenario: Successful Login
     Username and password are correct the login is successful
  
Given  I have to enter username and password
When  I enter valid credentials
Then   I should be able to login 

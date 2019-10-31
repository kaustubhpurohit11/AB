Feature: Register
New user Registration

Scenario: Successful Registration
New user is registered after entering all the details


Given I click Signup and the Register page is opened
When I enter Username
And I enter First name
And I enter Last Name
And I enter Password
And I enter Confirm Password
And I enter Gender
And I enter Email
And I enter Mobile Number
And I enter DOB
And I enter Address
And I select security question
And I enter Answer
And I click on Register

Then I should be Registered
And I should be able to login with my own credentials
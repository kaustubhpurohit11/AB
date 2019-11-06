Feature: Login Action
Test Login Functionality


Scenario Outline: Successful login with Valid Credentials
Given Naigate to home page
When user enters username and password

Examples: 
|username|password   |
|Lalitha |Password123|
|Rick    |Rick123    |
|Andrew  |Andrew123  

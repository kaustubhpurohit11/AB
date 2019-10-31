Feature: Login

Scenario Outline: Login sucessful
Given I have opted to login

When Larry have opted to login with  "<username>"  and  "<password>"

Then Larry should logged in succesfully

Examples:
|username|password   |
|Larry29 |Password123|
|Sean20  |TestMe@123 |

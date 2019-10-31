$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/L.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login sucessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have opted to login",
  "keyword": "Given "
});
formatter.step({
  "name": "Larry have opted to login with  \"\u003cuserName\u003e\"  and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Larry should logged in succesfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "Larry29",
        "Password123"
      ]
    },
    {
      "cells": [
        "Sean20",
        "TestMe@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login sucessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have opted to login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.login.i_have_opted_to_login() in file:/C:/Users/A07216trng_M7A.05.19/eclipse-c/Project/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Larry have opted to login with  \"Larry29\"  and  \"Password123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Larry should logged in succesfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Login sucessful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have opted to login",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.login.i_have_opted_to_login() in file:/C:/Users/A07216trng_M7A.05.19/eclipse-c/Project/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Larry have opted to login with  \"Sean20\"  and  \"TestMe@123\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Larry should logged in succesfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
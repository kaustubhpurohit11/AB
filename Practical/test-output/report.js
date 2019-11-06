$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/L.feature");
formatter.feature({
  "name": "Login Action",
  "description": "Test Login Functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestMe.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    },
    {
      "cells": [
        "Rick",
        "Rick123"
      ]
    },
    {
      "cells": [
        "Andrew",
        "Andrew123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestMe.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"userName\"}\n  (Session info: chrome\u003d78.0.3904.87)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027M7-DX-79LFNK2\u0027, ip: \u002710.217.199.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\A07216~1.19\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:65305}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6cfda9ec512ee688fb1453b4c525a4e6\n*** Element info: {Using\u003dlink text, value\u003duserName}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat stepDefined.PageObjLog.username(PageObjLog.java:30)\r\n\tat stepDefined.LoginTestMe.user_enters_username_and_password(LoginTestMe.java:38)\r\n\tat ✽.user enters username and password(file:Features/L.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Login message displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestMe.login_message_displayed_successfully()"
});
formatter.result({
  "status": "skipped"
});
});
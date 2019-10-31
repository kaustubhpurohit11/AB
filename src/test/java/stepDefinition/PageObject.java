package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageObject {
	 WebDriver driver;
	 public PageObject(WebDriver driver) {
	 PageFactory.initElements(driver, this);
	 }
	 
	 @FindBy(partialLinkText="SignIn")
	 public static WebElement signin;
	 
	 @FindBy(name="userName")
	 public static WebElement userName;
	 public void enter_userName(String user_Name) {
	 userName.sendKeys(user_Name);
	 }
	 @FindBy(name="password")
	 public static WebElement password;
	 public void enter_password(String Pass_word) {
	 password.sendKeys(Pass_word);
	 }
	 @FindBy(name="Login")
	 public static  WebElement login; 
	 
	 
	
	 public void signedin() {
		 signin.click();
		 }
	 public void loggedin() {
		 login.click();
		 }

	 }
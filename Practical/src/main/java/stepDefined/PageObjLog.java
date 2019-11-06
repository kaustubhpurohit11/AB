package stepDefined;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PageObjLog {
	WebDriver driver;
	public PageObjLog(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	@FindBy(linkText="SignIn")
	public static WebElement SignIn;
	
	@FindBy(linkText="userName")
	public static WebElement userName;
	
	@FindBy(linkText="password")
	public static WebElement password;
	
	@FindBy(linkText="Login")
	public static WebElement Login;
	
	public void signIn() {
		SignIn.click();
	}
	
	public void username(String dataTable) {
		userName.sendKeys(dataTable);
	}
	
	public void pass(String dataTable) {
		password.sendKeys(dataTable);
	}
		
	public void log() {
		Login.click();
	}

}

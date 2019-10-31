package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class login {
	 
	public static WebDriver driver;
	PageObject  po;
	@Given("I have opted to login")
	public void i_have_opted_to_login() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\KP\\Drivers Selenium\\chromedriver_win32\\chromedriver.exe");
		//launch the chrome browser
		
		
		
	    driver = new ChromeDriver();
	    
		
		//open the google.com page in chrome
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.manage().window().maximize();
		//driver.findElement(By.partialLinkText("SignIn")).click();
		po = new PageObject(driver);
		po.signedin();
	}

	@When("I enter correct username and password")
	public void i_enter_correct_username_and_password() {
	    // Write code here that turns the phrase above into concrete actions
		//driver.findElement(By.id("userName")).sendKeys("Lalitha");
		//driver.findElement(By.id("password")).sendKeys("Password123");
		//driver.findElement(By.name("Login")).click();
		
		//po.enter_userName("Lalitha");
		//po.enter_password("Password123");
		//po.loggedin();
	}

	@Then("I should logged in succesfully")
	public void i_should_logged_in_succesfully() {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(driver.getTitle(), "Home");
	}

}

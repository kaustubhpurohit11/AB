package stepDefined;

import org.testng.Assert;
import org.testng.AssertJUnit;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import io.cucumber.datatable.DataTable;

public class LoginTestMe {
	PageObjLog p2;
	public static WebDriver driver;
	@Given("navigate to home page")
	public void navigate_to_home_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\KP\\Drivers Selenium\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.manage().window().maximize();
		Thread.sleep(2000);
		p2 = new PageObjLog(driver);
		p2.signIn();
		//Assert.assertEquals(driver.getTitle(),Login);
		
		
	}
    @When("user enters username and password")
    public void user_enters_username_and_password(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {
    	
    	
    	
    p2.username(dataTable.cell(0, 0));
    p2.pass(dataTable.cell(0, 2));
    p2.log();
    	Thread.sleep(1000);
    }
    @Then("Login message displayed successfully")
    public void login_message_displayed_successfully() {
    	//Assert.assertEquals(driver.getTitle(),Home);
    }
}

package testRun;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features/L.feature",glue="stepDefined",monochrome=true , plugin= {"pretty","html:test-output"})
public class LoginRun {

}

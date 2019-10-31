Feature: Payment
Checkout and successful payment

Scenario: Successful payment
The product is added to the cart after clicking checkout payment is don

Given I have logged in and the category tab is visible
When I click category tab and select a product by clicking "Add to Cart"
Then The product is added to the cart
And I click on "Checkout"
Then After adding Shipping address I Click on Proceed to Pay	
And The payment gateway is opened
When I select Bank and enter valid credentials
And Click on pay
Then The payment is Done		
And The product is ordered
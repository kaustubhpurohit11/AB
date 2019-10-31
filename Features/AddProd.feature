Feature: Add a product
Adding a product to the cart

Scenario: Successful product adding to the cart
The product is added to the cart after clicking "Add to Cart"

Given I have logged in and the category tab is visible
When I click category tab and select a product by clicking "Add to Cart"
Then The product is added to the cart
And The cart is viewed and the added product is displayed
Feature: End to End e-commerce validation

    Scenario: e-commerce products delivery

        Given I am on e-commerce page
        When I login to the application
        And I add items to the Cart and checkout
        And Validate the total price limit
        Then Select the country submit and verify thank you

    @Smoke
    Scenario: e-commerce products delivery

        Given I am on e-commerce page
        When I login to the application portal
            | username           | password |
            | rahulshettyacademy | learning |
        And I add items to the Cart and checkout
        And Validate the total price limit
        Then Select the country submit and verify thank you
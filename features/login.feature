Feature: Login Page Validation

    Background:
        Given Launch the Browser

    Scenario: Validate the Valid credentials
        When Enter the username "Login1"
        And Enter the password "Password1"
        Then Validate the home page
        
    
    Scenario: Validate the InValid credentials
        When Enter the username "Login2"
        And Enter the password "Password2"
        Then Validate the home page


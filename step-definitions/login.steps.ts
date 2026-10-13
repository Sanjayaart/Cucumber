import { Given,When,Then } from "@cucumber/cucumber";

Given('Launch the Browser', async function () {
    console.log("browser launch");
});

When('Enter the username {string}', async function (username) {
    console.log(username);
});

When('Enter the password {string}', async function (password) {
    console.log(password);
});

Then('Validate the home page', async function () {
    console.log("homepage")
});
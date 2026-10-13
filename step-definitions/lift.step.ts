import { Given,When,Then } from "@cucumber/cucumber";

 Given('Close the door after boarding', async function () {
        console.log ('Lift Closes')
});

When('I press the 5th floor', async function () {
    console.log('Pressed 5th Floor');
});

 When('The lift moves', function () {
    console.log('Lift moving upwards');
});

Then('The lift door poen at 5th floor', function () {
    console.log("Reached 5th floor, Doors Open")
});
import {Given, When, Then } from '@cucumber/cucumber';
import {chromium, Browser, Page} from '@playwright/test';
import { AdactinLogin } from '../pages/adactinlogin';

let page: Page;
let browser: Browser;
let adactinLogin: AdactinLogin;

Given ('New Browser Login', async function() {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    adactinLogin = new AdactinLogin(page);
await adactinLogin.gotoAdactin();

});

When ('Enter Login credentials', async function(dataTable){
    const data = dataTable.rowsHash();
    await AdactinLogin.username.fill(data.username);
    await AdactinLogin.password.fill(data.password);

});

Then ('User credentials validated', async function(){
await AdactinLogin.login.click();


})
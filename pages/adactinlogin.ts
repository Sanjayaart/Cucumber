import {Page, Locator} from 'Playwright';

export class AdactinLogin{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;
    static username: any;
    static password: any;
    static login: any;

    constructor (page:Page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login = page.locator('#login');

    }
    async gotoAdactin() { 
        await this.page.goto('https://adactinhotelapp.com/index.php');

    }
}
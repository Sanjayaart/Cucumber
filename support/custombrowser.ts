import { setWorldConstructor, World } from "@cucumber/cucumber";
import {Page,Browser} from '@playwright/test';

export class custombrowser extends World {
    browser !: Browser;
    page !: Page;
        
}
setWorldConstructor(custombrowser);
import { Given, When, Then } from '@cucumber/cucumber';
import sauceDemoPage from '../pageobjects/saucedemo.page';

Given('User on Sauce Demo Page', async () => {
  await sauceDemoPage.validateSauceDemoPage();
});

When('User input username', async () => {
  await sauceDemoPage.inputUser();
});

When('User input password', async () => {
  await sauceDemoPage.inputPassword();
});

When('User click Login button', async () => {
  await sauceDemoPage.clickLogin();
});

Then('User success login', async () => {
  await sauceDemoPage.validateProductPage();
});

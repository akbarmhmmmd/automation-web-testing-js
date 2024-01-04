import { Given, When, Then } from '@cucumber/cucumber';
import sauce from '../pageobjects/saucedemo.page';

Given('User on Sauce Demo Page', async () => {
  await sauce.validateSauceDemoPage();
});

When('User input username', async () => {
  await sauce.inputUser();
});

When('User input password', async () => {
  await sauce.inputPassword();
});

When('User click Login button', async () => {
  await sauce.clickLogin();
});

Then('User success login', async () => {
  await sauce.validateProductPage();
});

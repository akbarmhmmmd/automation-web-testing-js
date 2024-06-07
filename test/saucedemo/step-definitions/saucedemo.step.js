import { Given, When, Then } from '@cucumber/cucumber';
import sauce from '../pageobjects/saucedemo.page';

Given('User on Sauce Demo Page', async () => {
  await sauce.validateSauceDemoPage();
});

When(/^User click ([^"]*) Button$/, async (click) => {
  await sauce.clickAction(click);
});

When(/^User input username "([^"]*)"$/, async (username) => {
  await sauce.inputUser(username);
});

When(/^User input password "([^"]*)"$/, async (password) => {
  await sauce.inputPassword(password);
});

When('User click Login button', async () => {
  await sauce.clickLogin();
});

When('User redirected to Home Page', async () => {
  await sauce.clickLogin();
  await sauce.validateLogin();
});

Then(/^User able to see ([^"]*) added to cart$/, async (cart) => {
  await sauce.validateAddCart(cart);
});

Then('User success Login to Swag Labs', async () => {
  await sauce.validateLogin();
});

Then(/^User failed login ([^"]*)$/, async (failed) => {
  await sauce.validateFailedLogin(failed);
});

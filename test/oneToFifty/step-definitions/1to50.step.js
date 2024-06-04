// example.steps.js
import { Given, When, Then } from '@cucumber/cucumber';
import oneToFifty from '../pageobjects/1to50.page';

Given('User on 1to50 Page', async () => {
  await oneToFifty.navigate();
});

When('User click 1 to 50 numbers', async () => {
  await oneToFifty.clickNumbers();
});

Then('User able to see the result', async () => {
    await oneToFifty.validateSuccess();
});

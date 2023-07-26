import { Given, When, Then } from '@cucumber/cucumber';
import heroku from '../pageobjects/heroku-web.page';

Given('User on Heroku Web', async () => {
  await heroku.validateHerokuWebPage();
});

When('User click Elements', async () => {
  await heroku.clickAddRemoveElements();
});

When('User click Add Element', async () => {
  await heroku.clickAddElement();
});

When('User click Delete Element', async () => {
  await heroku.clickDeleteElement();
});

Then('User success Add Element', async () => {
  await heroku.validateAddElements();
});

Then('User success Delete Element', async () => {
  await heroku.validateDeleteElements();
});

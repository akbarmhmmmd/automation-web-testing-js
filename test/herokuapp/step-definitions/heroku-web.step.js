import { Given, When, Then } from '@cucumber/cucumber';
import heroku from '../pageobjects/heroku-web.page';

Given('User on Heroku Web', async () => {
  await heroku.validateHerokuWebPage();
});

When('User click Elements', async () => {
  await heroku.clickAddRemoveElements();
});

When(/^User click (Add|Delete) Element$/, async (element) => {
  switch(element) {
  case 'Add':
    await heroku.clickAddElement();
    break;
  case 'Delete':
    await heroku.clickDeleteElement();
    break;
  }
});

Then('User success Add Element', async () => {
  await heroku.validateAddElements();
});

Then('User success Delete Element', async () => {
  await heroku.validateDeleteElements();
});

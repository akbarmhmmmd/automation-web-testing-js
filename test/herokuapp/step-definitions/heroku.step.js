import { Given, When, Then } from '@cucumber/cucumber';
import heroku from '../pageobjects/heroku.page';

Given('User on Heroku Web', async () => {
  await heroku.validateHerokuWebPage();
});

When(/^User click (Add Remove Element|Add Element|Delete Element|Context Menu|Checkboxes|First Checkbox|Second Checkbox|Dropdown|Option) Button$/
  , async (click) => {
  await heroku.clickAction(click);
});

When(/^User select (First|Second) Option$/, async (select) => {
  await heroku.selectOption(select);
});

Then('User success select Dropdown', async () => {
  await heroku.validateSelectDropdown();
});

Then('User success click Checkboxes', async () => {
  await heroku.validateCheckBox();
});

Then('User success Add Element', async () => {
  await heroku.validateAddElements();
});

Then('User success Delete Element', async () => {
  await heroku.validateDeleteElements();
});

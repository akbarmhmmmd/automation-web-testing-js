import { Given, When, Then } from '@cucumber/cucumber';
import heroku from '../pageobjects/heroku.page';

Given('User on Heroku Web', async () => {
  await heroku.validateHerokuWebPage();
});

When(/^User click ([^"]*) Button$/, async (click) => {
  await heroku.clickAction(click);
});

When(/^User select (First|Second) Option$/, async (select) => {
  await heroku.selectOption(select);
});

When(/^User input field "([^"]*)"$/, async (test) => {
  await heroku.inputField(test);
})

Then(/^User success ([^"]*)$/, async (validate) => {
  switch(validate){
  case 'select Dropdown':
    await heroku.validateSelectDropdown();
    break;
  case 'click Checkboxes':
    await heroku.validateCheckBox();
    break;
  case 'Add Element':
    await heroku.validateAddElements();
    break;
  case 'Delete Element':
    await heroku.validateDeleteElements();
    break;
  case 'Remove A Checkbox':
    await heroku.validateRemoveACheckbox();
    break;
  case 'Disabled Field':
    await heroku.validateDisabledField();
    break;
  case 'Add A Checkbox':
    await heroku.validateAddACheckbox();
    break;
  default: 
    throw new Error('Option does not exist');
  };
});

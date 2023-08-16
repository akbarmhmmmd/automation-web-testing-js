import { Given, When, Then } from '@cucumber/cucumber';
import demoqa from '../pageobjects/demoqa.page';

Given('User on Demo QA Page', async () => {
  await demoqa.validateDemoQAPage();
});

When(/^User click (Elements Menu|Text Box|Submit) Button$/, async (click) => {
  await demoqa.clickAction(click);
});

When(/^User input ([^"]*) Field$/, async (input) => {
  await demoqa.inputField(input);
});

Then('User can view Submitted Data', async () => {
  await demoqa.validateSubmitForm();
});

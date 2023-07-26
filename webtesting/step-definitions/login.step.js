import { Given, When, Then } from '@cucumber/cucumber';
import login from '../pageobjects/login.page';

const email = "akunkompasid10@gmail.com ";
const password = "Testing2020@";

Given('User on Dasborv2 login page', async () => {
  await login.navigateToLogin();
});

When('User click login button', async () => {
  await login.clickLogin();
});

Then(/^(?:V|v)alidate user already in Dasborv2 home page$/, async () => {
  await login.validateDasborHomePage();
});

Given(
  /^User input (correct|incorrect) email$/,
  async (flag) => {
    let value;

    switch (flag) {
    case 'correct':
      value = email;
      break;
    case 'incorrect':
      value = 'abc';
      break;
    default:
      throw new Error('no option or flag');
    }

    await login.inputEmail(value);
  },
);

Given(
  /^User input (correct|incorrect|blank) password$/,
  async (flag) => {
    let value;

    switch (flag) {
    case 'correct':
      value = password;
      break;
    case 'incorrect':
      value = 'abc';
      break;
    case 'blank':
      value = '';
      break;
    default:
      throw new Error('no option or flag');
    }

    await login.inputPassword(value);
  },
);

When(/^User get error message ([^"]*)$/, async (msg) => {
  switch (msg) {
  case 'Empty Password':
    await login.validateEmptyPassword();
    break;
  case 'Empty Field':
    await login.validateEmptyField();
    break;
  case 'Mismatch Password':
    await login.validateMismatchPassword();
    break;
  case 'Invalid Email':
    await login.validateInvalidEmail();
    break;
  default:
    throw new Error('Message not found');
  }
});

// NOTES SAUCEDEMO APP PAGE OBJECTS
const sauceDemoUrl = 'https://saucedemo.com';
const swagLabsText = $('//*[@id="root"]//*[contains(text(), "Swag Labs")]');
const userField = $('#user-name');
const passField = $('#password');
const loginButton = $('#login-button');
const homePage = $('//*[@class="app_logo"][contains(text(), "Swag Labs")]');
const wrongAlert = $('//*[contains(text(), "do not match")]');
const lockedOut = $('//*[contains(text(), "locked out")]');
const visualError = $('//*[@src="/static/media/sl-404.168b1cce.jpg"]');
const burgerButton = $('//button[@id="react-burger-menu-btn"]')
const logoutButton = $('//*[contains(text(), "Logout")]')

// const username = 'standard_user';
// const password = 'secret_sauce';

const sauceDemoPage = function saucedemopage () {
  this.validateSauceDemoPage = async () => {
    await browser.url(sauceDemoUrl);
    await browser.maximizeWindow();
    await expect(browser).toHaveUrlContaining("saucedemo");
    await swagLabsText.waitForDisplayed({ timeout: 5000 });
  };

  this.inputUser = async (username) => {
    await userField.waitForClickable({ timeout: 5000 });
    await userField.setValue(username);
  };

  this.inputPassword = async (password) => {
    await passField.waitForClickable({ timeout: 5000 });
    await passField.setValue(password);
  };

  this.clickLogin = async () => {
    await loginButton.waitForClickable({ timeout: 5000 });
    await loginButton.click();
    await browser.pause(2000);
  };

  this.validateLogin = async() => {
    await homePage.waitForDisplayed({ timeout: 10000 });
  };

  this.validateFailedLogin = async(failed) => {
    switch (failed){
      case 'invalid':
        await wrongAlert.waitForDisplayed({ timeout: 10000 });
        break;
      case 'locked_out':
        await lockedOut.waitForDisplayed({ timeout: 10000 });
        break;
      case 'problem':
        for (let i = 0; i <= 5; i++) {
          const xpath = `//*[@id="item_${i}_img_link"]//*[@src="/static/media/sl-404.168b1cce.jpg"]`;
          await browser.$(xpath).waitForDisplayed();
        }
        await burgerButton.waitForClickable({ timeout: 5000 });
        await burgerButton.click({ timeout: 5000 });
        await logoutButton.waitForClickable({ timeout: 5000 });
        await logoutButton.click({ timeout: 5000 });
        await swagLabsText.waitForDisplayed({ timeout: 5000 });
        break;
      case 'visual':
        await visualError.waitForDisplayed({ timeout: 10000 });
        await burgerButton.waitForClickable({ timeout: 5000 });
        await burgerButton.click({ timeout: 5000 });
        await logoutButton.waitForClickable({ timeout: 5000 });
        await logoutButton.click({ timeout: 5000 });
        await swagLabsText.waitForDisplayed({ timeout: 5000 });
        break;
      default:
        throw new Error('Option does not exist');
    }
    await browser.pause(2000)
  }
};

module.exports = new sauceDemoPage();

// NOTES SAUCEDEMO APP PAGE OBJECTS
const sauceDemoUrl = "https://saucedemo.com";
const swagLabsText = $('//*[@id="root"]//*[contains(text(), "Swag Labs")]');
const userField = '#user-name';
const passField = '#password';
const loginButton = '#login-button';
const productsText = $('//*[contains(text(), "Products")]');

const username = 'standard_user';
const password = 'secret_sauce';

const sauceDemoPage = function saucedemopage () {
  this.validateSauceDemoPage = async () => {
    await browser.url(sauceDemoUrl);
    await browser.maximizeWindow();
    await expect(browser).toHaveUrlContaining("saucedemo");
    await swagLabsText.waitForDisplayed({ timeout: 5000 });
  };

  this.inputUser = async () => {
    await userField.waitForClickable({ timeout: 5000 });
    await userField.setValue(username);
  };

  this.inputPassword = async () => {
    await passField.waitForClickable({ timeout: 5000 });
    await passField.setValue(password);
  };

  this.clickLogin = async () => {
    await loginButton.waitForClickable({ timeout: 5000 });
    await loginButton.click();
  };

  this.validateProductPage = async() => {
    await productsText.waitForDisplayed({ timeout: 5000 });
  };
};

module.exports = new sauceDemoPage();

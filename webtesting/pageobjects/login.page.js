// NOTE Login Page
const fieldEmail = $('#email');
const fieldPassword = $('#password');
const submitButton = $('#login-button');
const errorEmptyEmail = $('#alert-empty-email');
const errorEmptyPassword = $('#alert-empty-password');
const errorInvalidEmail = $('#alert-validation-email');
const errorMismatchPassword = $('//div[@class="flex p-3 '
+ 'mb-3 mt-3 text-sm rounded-xl text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800"]');
const dasborLogin = "https://dasborv2.kompas.cloud/auth/login";
const dasborHome = "https://dasborv2.kompas.cloud";
const username = $('p.ml-2.mt-1');
const berandaText = $('span.text-2xl.font-bold');

const LoginPage = function loginpage() {
  this.navigateToLogin = async () => {
    await browser.pause(1000);
    await browser.url(dasborLogin);
    await fieldEmail.waitForDisplayed(10000);
    await fieldPassword.waitForDisplayed(10000);
    await submitButton.waitForDisplayed(10000);

    await browser.pause(5000);
  };

  this.inputEmail = async (inputEmail) => {
    await fieldEmail.waitForDisplayed({ timeout: 30000 });
    await fieldEmail.setValue(inputEmail);
  };

  this.inputPassword = async (pass) => {
    await fieldPassword.waitForDisplayed({ timeout: 30000 });
    await fieldPassword.setValue(pass);
    await expect(fieldPassword).toHaveAttribute('type', 'password');
  };

  this.clickLogin = async () => {
    await submitButton.click();
    await browser.pause(3000);
  };

  this.validateDasborHomePage = async () => {
    await expect(browser).toHaveUrlContaining(dasborHome);
    await expect(username).toHaveTextContaining('akunkompasid10');
    await expect(berandaText).toHaveTextContaining('Beranda');
  };

  this.validateEmptyPassword = async () => {
    await errorEmptyPassword.waitForDisplayed({ timeout: 5000 });
    await expect(errorEmptyPassword).toHaveTextContaining('Password harus diisi.');
  };

  this.validateEmptyField = async () => {
    await errorEmptyEmail.waitForDisplayed({ timeout: 5000 });
    await errorEmptyPassword.waitForDisplayed({ timeout: 5000 });
    await expect(errorEmptyPassword).toHaveTextContaining('Password harus diisi.');
    await expect(errorEmptyEmail).toHaveTextContaining('Email harus diisi.');
  };

  this.validateInvalidEmail = async () => {
    await errorInvalidEmail.waitForDisplayed({ timeout: 5000 });
    await expect(errorInvalidEmail).toHaveTextContaining(
      'Masukkan format email yang benar dan valid.',
    );
  };

  this.validateMismatchPassword = async () => {
    await errorMismatchPassword.waitForDisplayed({ timeout: 5000 });
    await expect(errorMismatchPassword).toHaveTextContaining(
      'Maaf, email atau kata sandi Anda salah.',
    );
  };
};

module.exports = new LoginPage();

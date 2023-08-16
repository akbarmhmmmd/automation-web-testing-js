// NOTES DEMO QA WEB PAGE OBJECTS
const fieldUserName = $('#userName');
const fieldEmail = $('#userEmail');
const fieldCurrentAddress = $('#currentAddress');
const fieldPermanentAddress = $('#permanentAddress');
const outputText = $('#output');
const desktopText = $('//*[contains(text(), "Desktop")]');
const element = {
    elementsMenuButton: $('//*[@id="app"]//*[contains(text(), "Elements")]'),
    textBoxButton: $('//*[@class="menu-list"]//*[contains(text(), "Text Box")]'),
    submitButton: $('#submit'),
    checkBoxButton: $('//*[@class="menu-list"]//*[contains(text(), "Check Box")]'),
    homeToggleButton : $('//*[@id="tree-node"]/ol/li/span/button'),
    desktopToggleButton: $('//*[@id="tree-node"]/ol/li/ol/li[1]/span/button'),
    documentsToggleButton: $('//*[@id="tree-node"]/ol/li/ol/li[2]/span/button'),
    downloadsToggleButton: $('//*[@id="tree-node"]/ol/li/ol/li[3]/span/button'),
};

const demoQAUrl = 'https://demoqa.com/';
const userName = 'usertesting';
const email = 'user@user.com';
const currentAddress = 'Jl. Jl. ke Pasar Baru';
const permanentAddress = 'Permanent Jl. Jl. ke Pasar Baru';

const DemoQAPage = function demoqapage () {
  this.validateDemoQAPage = async () => {
    await browser.pause(1000);
    await browser.url(demoQAUrl);
    await expect(browser).toHaveUrl(demoQAUrl);
  };

  this.inputField = async (input) => {
    switch (input) {
      case 'Username':
        await fieldUserName.setValue(userName);
        break;
      case 'Email':
        await fieldEmail.setValue(email);
        break;
      case 'Current Address':
        await fieldCurrentAddress.setValue(currentAddress);
        break;
      case 'Permanent Address':
        await fieldPermanentAddress.setValue(permanentAddress);
        break;
      default:
        throw new Error('Field does not exist');
    };
  };

  this.clickAction = async (click) => {
    const clickButton = (click.charAt(0).toLowerCase() + click.slice(1)).replace(/\s+/g, '');
    await element[`${clickButton}Button`].waitForClickable();
    await element[`${clickButton}Button`].click();
  };

  this.validateSubmitForm = async () => {
    await outputText.scrollIntoView();
    await outputText.waitForDisplayed({ timeout: 10000 });
  };
};

module.exports = new DemoQAPage();

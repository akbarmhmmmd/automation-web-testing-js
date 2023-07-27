const welcomeText = $('//*[@id="content"]/h1');
const addRemoveElementsButton = $('//*[contains(text(), "Add/Remove")]');
const addElementButton = $('//*[contains(text(), "Add Element")]');
const deleteButton = $('//*[contains(text(), "Delete")]');

const herokuUrl = "https://the-internet.herokuapp.com/";

const herokuWebPage = function herokuwebpage () {
  this.validateHerokuWebPage = async () => {
    await browser.pause(1000);
    await browser.url(herokuUrl);
    await expect(browser).toHaveUrlContaining("herokuapp");
    await expect(welcomeText).toHaveTextContaining("Welcome");
  };

  this.clickAddRemoveElements = async () => {
    await addRemoveElementsButton.waitForClickable();
    await addRemoveElementsButton.click();
  };

  this.clickAddElement = async () => {
    await addElementButton.waitForClickable();
    await addElementButton.click();
  };

  this.clickDeleteElement = async () => {
    await deleteButton.waitForClickable();
    await deleteButton.click();
  }

  this.validateAddElements = async () => {
    await deleteButton.waitForDisplayed({ timeout: 10000 });
  };

  this.validateDeleteElements = async () => {
    await addElementButton.waitForClickable({ timeout: 10000 });
  }
};

module.exports = new herokuWebPage();

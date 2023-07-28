const welcomeText = $('//*[@id="content"]/h1');
const deleteText = $('//*[contains(text(), "Delete")]');
const checkboxesText = $('//*[contains(text(), "Checkboxes")]');
const dropdownText = $('//*[contains(text(), "Dropdown List")]');
const firstOption = $('//*[contains(text(), "Option 1")]');
const secondOption= $('//*[contains(text(), "Option 2")]');
const element = {
  addRemoveElementButton: $('//*[contains(text(), "Add/Remove")]'),
  addElementButton: $('//*[contains(text(), "Add Element")]'),
  deleteElementButton: $('//*[contains(text(), "Delete")]'),
  contextMenuButton: $('//*[contains(text(), "Context Menu")]'),
  checkboxesButton: $('//*[contains(text(), "Checkboxes")]'),
  firstCheckboxButton: $('//*[@id="checkboxes"]/input[1]'),
  secondCheckboxButton: $('//*[@id="checkboxes"]/input[2]'),
  dropdownButton: $('//*[contains(text(), "Dropdown")]'),
  optionButton: $('#dropdown'),
};

const herokuUrl = "https://the-internet.herokuapp.com/";

const herokuWebPage = function herokuwebpage () {
  this.validateHerokuWebPage = async () => {
    await browser.pause(1000);
    await browser.url(herokuUrl);
    await expect(browser).toHaveUrlContaining("herokuapp");
    await expect(welcomeText).toHaveTextContaining("Welcome");
  };

  this.clickAction = async (click) => {
    const clickButton = (click.charAt(0).toLowerCase() + click.slice(1)).replace(/\s+/g, '');
    await element[`${clickButton}Button`].waitForClickable();
    await element[`${clickButton}Button`].click();
  };

  this.selectOption = async (select) => {
    await browser.pause(1000);

    switch(select) {
    case 'First':
      await firstOption.click();
      break;
    case 'Second':
      await secondOption.click();
      break;
    default:
      throw new Error("Option doesn't exist");
    };
  };

  this.validateSelectDropdown = async () => {
    await dropdownText.waitForDisplayed({ timeout: 10000 });
  };

  this.validateCheckBox = async () => {
    await checkboxesText.waitForDisplayed({ timeout: 10000 });
  };

  this.validateAddElements = async () => {
    await deleteText.waitForDisplayed({ timeout: 10000 });
  };

  this.validateDeleteElements = async () => {
    await deleteText.waitForDisplayed({ reverse:true, timeout: 10000 });
  };
};

module.exports = new herokuWebPage();

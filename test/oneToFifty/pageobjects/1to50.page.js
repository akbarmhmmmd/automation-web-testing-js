// NOTES 1to50 PAGE OBJECTS
const restartButton = $('//*[contains(text(), "Restart")]');
const homePage = $('//*[@aria-hidden="false"]');
const adFrame = $('//*[@id="ad_iframe"]');
const yourScore = $('//*[contains(text(), "1to50, Your score")]');
const dismissAdButton = $('//*[@id="dismiss-button"]');
const numberOfGridElements = 50;
const oneToFiftyUrl = 'https://zzzscore.com/1to50/en/';

const oneToFiftyWebPage = function oneToFiftywebpage () {
    this.navigate = async () => {
        await browser.pause(1000);
        await browser.url(oneToFiftyUrl);
        await browser.maximizeWindow();
        await expect(browser).toHaveUrlContaining("1to50");
    };

    this.clickNumbers = async () => {
        await restartButton.scrollIntoView();
        for (let i = 1; i <= numberOfGridElements; i++) {
            const xpath = `//*[@class="grid x5"]//div[text()="${i}"]`;
            await browser.$(xpath).click();
        }
    };

    this.validateSuccess = async () => {
        await adFrame.waitForExist({ timeout: 10000 });
        await browser.switchToFrame(adFrame);
        await dismissAdButton.waitForClickable();
        await dismissAdButton.click();
        await browser.switchToFrame(null);
        await yourScore.waitForDisplayed({ timeout: 10000 });
        console.log("Test Completed");
    };
    
};

module.exports = new oneToFiftyWebPage();

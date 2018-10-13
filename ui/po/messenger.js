const elements = require('../selectors/messenger');
const until = require('selenium-webdriver').until;

class Messenger {
    constructor(driver) {
        this.driver = driver;
    }

    get like() {
        return this.driver.findElement(By.css(elements.likeButton));
    }

    get input() {
        return this.driver.findElement(By.css(elements.input));
    }

    get send() {
        return this.driver.findElement(By.xpath(elements.send));
    }

    get incomings() {
        return this.driver.findElements(By.css(elements.incoming));
    }

    async readLastIncoming() {
        console.log("readmessage")
        this.driver.sleep(1000);
        return await this.incomings.getText().then(text => console.log(text));
    }

    async isLoaded() {
        await this.input.isDisplayed();
    }

    async waitForLoading() {
        await this.driver.wait(() => this.isLoaded());
    }

    async getIncomingMessage() {
        await this.INCOMING.getText();
    }

    async pressEnter() {
        await this.input.sendKeys(this.driver.Key.ENTER);
    }

    async clickSendButton() {
        await this.driver.sleep(1000);
        await this.send.click()
    }

    async sendMessage(message) {
        await this.input.sendKeys(message);
    }

    async sendLike() {
        await this.like.click();
    }
}

module.exports = Messenger
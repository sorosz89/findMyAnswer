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
        return this.driver.findElements(By.xpath(elements.incoming));
    }

    async readIncoming() {
        const messageItems = await this.incomings;
        let lastMessageItem = messageItems[messageItems.length - 1];
        const message = await lastMessageItem.getText()
        console.log("New message: ", message);
        return message;
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
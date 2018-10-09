const elements = require('../selectors/messenger');

class Messenger {
    constructor(driver) {
        this.driver = driver;
        this.INPUT = this.driver.findElement(By.css(elements.input));
        this.LIKE = this.driver.findElement(By.css(elements.likeButton));
        this.INCOMING = this.driver.findElement(By.css(elements.lastIncoming));
    }

    async isLoaded() {
        return await this.INPUT.isDisplayed();
    }

    async waitForLoading() {
        return await this.driver.wait(() => this.isLoaded());
    }

    async getIncomingMessage() {
        return await this.INCOMING.getText();
    }

    async pressEnter() {
        return await this.INPUT.sendKeys(driver.Key.ENTER);
    }

    async sendMessage(message) {
        console.log("sendMessage", message)
        return await this.INPUT.sendKeys(message);
    }

    async sendLike() {
        return await this.LIKE.click();
    }
}

module.exports = Messenger
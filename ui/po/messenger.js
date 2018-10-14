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
        if (messageItems && messageItems.length != 0) {
            let lastMessageItem = messageItems[messageItems.length - 1];
            const message = await lastMessageItem.getText()
            return message;
        }
        console.warn("readIncoming:No incoming messages!")
    }

    async pressEnter() {
        await this.input.sendKeys(this.driver.Key.ENTER);
    }

    async clickSendButton() {
        await this.driver.sleep(timing.sendTimeout)
        await this.send.click();
    }

    async typeMessage(message){
        await this.input.sendKeys(message);
    }

    async sendMessage(message) {
        await this.typeMessage(message);
        await this.clickSendButton();
    }

    async sendLike() {
        await this.like.click();
    }
}

module.exports = Messenger
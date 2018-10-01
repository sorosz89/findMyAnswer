const elements = require('../selectors/messenger');
let driver = global.driver;
let inputField = driver.findElement(By.css(elements.inputField));
let likeButton = driver.findElement(By.css(elements.likeButton));
let lastIncoming = driver.findElement(By.css(elements.lastIncoming));

class Messenger {

    isLoaded() {
        return inputField.isDisplayed();
    }

    waitForLoading() {
        return driver.wait(() => this.isLoaded());
    }

    getIncomingMessage() {
        return lastIncoming.getText();
    }

    pressEnter() {
        return inputField.sendKeys(driver.Key.ENTER);
    }

    sendMessage(message) {
        return inputField.sendKeys(message);
    }

    sendLike() {
        return likeButton.click();
    }
}

module.exports = Messenger
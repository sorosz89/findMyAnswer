const elements = require('../selectors/login');
let driver = global.driver;
let userNameInput = driver.findElement(By.css(elements.userName));
let passwordInput = driver.findElement(By.css(elements.password));
let confirmButton = driver.findElement(By.css(elements.confirmButton));

class Login {

    isLoaded() {
        return passwordInput.isDisplayed();
    }

    waitForLoginPage() {
        return driver.wait(() => this.isLoaded());
    }

    sendUserName(username) {
        return userNameInput.sendKeys('username');
    }

    sendPassword(password) {
        return passwordInput.sendKeys('password')
    }

    getUser(id) {
        profile = users[`id`];
        return {
            username: profile.username,
            password: profile.password
        }
    }

    confirm() {
        return confirmButton.click();
    }

    logIn(id) {
        client = this.getUser(id);
        return this.sendUserName(client.username).then(() => this.sendPassword(client.password)).then(() => this.confirm())
    }
}

module.exports = Login
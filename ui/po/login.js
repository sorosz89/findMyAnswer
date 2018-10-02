const elements = require('../selectors/login');
const users = require('../../data/users');

class Login {
    constructor(driver) {
        this.driver = driver;
        this.USERINPUT = this.driver.findElement(By.css(elements.userName));
        this.PWINPUT = this.driver.findElement(By.css(elements.password));
        this.confirmButton = this.driver.findElement(By.css(elements.confirmButton));
    }

    isLoaded() {
        return this.PWINPUT.isDisplayed();
    }

    waitForLoginPage() {
        return driver.wait(() => this.isLoaded());
    }

    sendUserName(username) {
        return this.USERINPUT.sendKeys('username');
    }

    sendPassword(password) {
        return PWINPUT.sendKeys('password')
    }

    getUser(id) {
        let profile = users[id];
        console.log(profile);
        let client = {
            username: profile.username,
            password: profile.password
        }
        return client
    }

    confirm() {
        return confirmButton.click();
    }

    logIn(id) {
        let client = this.getUser(id);
        return this.sendUserName(client.username).then(() => this.sendPassword(client.password)).then(() => this.confirm())
    }
}

module.exports = Login
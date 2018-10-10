const elements = require('../selectors/login');
const users = require('../../data/users');

class Login {
    constructor(driver) {
        this.driver = driver;
        this.USERINPUT = this.driver.findElement(By.css(elements.userNameInput));
        this.PWINPUT = this.driver.findElement(By.css(elements.passwordInput));
        this.CONFIRM = this.driver.findElement(By.css(elements.confirmButton));
    }

    async isLoaded() {
        return await this.PWINPUT.isDisplayed();
    }

    async waitForLoginPage() {
        await driver.wait()
        return await this.isLoaded();
    }

    async sendUserName(username) {
        return await this.USERINPUT.sendKeys(username);
    }

    async sendPassword(password) {
        return await this.PWINPUT.sendKeys(password)
    }

    getUser(id) {
        let profile = users[id];
        let client = {
            username: profile.username,
            password: process.env.PW_VAR
        }
        return client
    }

    async confirm() {
        return await this.CONFIRM.click();
    }

    async enterCredentials(id) {
        let client = this.getUser(id);
        await this.sendUserName(client.username)
        await this.sendPassword(client.password)
        return await this.confirm()
    }
}

module.exports = Login
const elements = require('../selectors/login');
const users = require('../../data/users');

class Login {
    constructor(driver) {
        this.driver = driver;
    }

    get userInput() {
        return this.driver.findElement(By.css(elements.userNameInput));
    }

    get passwordInput() {
        return this.driver.findElement(By.css(elements.passwordInput));
    }

    get confirmButton() {
        return this.driver.findElement(By.css(elements.confirmButton));
    }

    async isLoaded() {
        return await this.passwordInput.isDisplayed();
    }

    async waitForLoginPage() {
        return await driver.wait(() => this.isLoaded());
    }

    async sendUserName(username) {
        return await this.userInput.sendKeys(username);
    }

    async sendPassword(password) {
        return await this.passwordInput.sendKeys(password)
    }

    getUser(id) {
        let client = {
            username: users[id].username,
            password: process.env.PW_VAR
        }
        return client
    }

    async confirm() {
        return await this.confirmButton.click();
    }

    async enterCredentials(id) {
        let client = this.getUser(id)
        await this.sendUserName(client.username)
        await this.sendPassword(client.password)
        return await this.confirm()
    }

}

module.exports = Login
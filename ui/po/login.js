const elements = require('../selectors/login');
const contacts = require('../../data/contacts');

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

    getUser(id) {
        let client = {
            username: id,
            password: process.env.PW_VAR
        }
        return client
    }

    async sendUserName(username) {
        return await this.userInput.sendKeys(username);
    }

    async sendPassword(password) {
        return await this.passwordInput.sendKeys(password)
    }

    async confirm() {
        return await this.confirmButton.click();
    }

    async enterCredentials(id) {
        let client = this.getUser(id)
        await this.sendUserName(client.username)
        await this.sendPassword(client.password)
    }

    async logIn(id) {
        await this.enterCredentials(id);
        await this.confirm();
    }
}

module.exports = Login